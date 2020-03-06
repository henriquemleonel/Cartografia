module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        const pin = {...req.body }

        if (req.params.id) pin.id = req.params.id

        try {
            existsOrError(pin.name, "Nome do pin não informado")
            existsOrError(pin.description, "Descrição não informada")
            existsOrError(pin.categoryId, "Categoria não informada")
        } catch (msg) {
            res.status(400).send(msg)
        }

        if (pin.id) {
            app.db('pins')
                .update(pin)
                .where({ id: pin.id })
                .then(_ => res.status(204).send(_))
                .catch(err => res.status(500).send())
        } else {
            app.db("pins")
                .insert(pin)
                .then(_ => res.status(204).send(_))
                .catch(err => res.status(500).send(err))
        }

    }

    const remove = async(req, res) => {
        try {
            const rowsDeleted = await app.db('pins')
                .where({ id: req.params.id })
                .del()

            try {
                existsOrError(rowsDeleted, 'O pin não foi encontrado')
            } catch (msg) {
                res.status(400).send(msg)
            }
        } catch (msg) {
            res.status(500).send(msg)
        }
    }

    const get = (req, res) => {
        app.db('pins')
            .select('id', "name", "email", "phone", "description", "imageUrl", "link1", "link2", "link3", "categoryId")
            .then(pins => {
                pins = pins.map(pin => {
                    pin.description = pin.description.toString()
                    return pin
                })
                return res.json(pins)
            })
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('pins')
            .where({ id: req.params.id })
            .first()
            .then(pin => {
                pin.description = pin.description.toString()
                return res.json(pin)
            })
            .catch(err => res.status(500).send(err))
    }

    return { getById, get, remove, save }
}