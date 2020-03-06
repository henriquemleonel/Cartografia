module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        const map = {...req.body }
        if (req.params.id) map.id = req.params.id

        try {
            existsOrError(map.pinId, "Pin da coordenada não informada!")
            existsOrError(map.x, "Coordenada X não informada")
            existsOrError(map.y, "Coordenada Y não informada")
        } catch (msg) {
            res.status(400).send(msg)
        }

        if (map.id) {
            app.db("maps")
                .where({ id: map.id })
                .then(_ => res.status(204).send(_))
                .catch(err => res.send(500).send(err))
        } else {
            app.db("maps")
                .insert(map)
                .then(_ => res.status(204).send(_))
                .catch(err => res.status(500).send(err))
        }


    }

    const remove = async(req, res) => {
        try {
            existsOrError(req.params.id, "Código do map não informado.")

            const rowsDeleted = await app.db('maps')
                .where({ id: req.params.id })
                .del()

            try {
                existsOrError(rowsDeleted, "Não foi encontrado a coordenada")
            } catch (msg) {
                res.status(400).send(msg)
            }

        } catch (msg) {
            res.status(500).send(msg)
        }
    }

    const get = (req, res) => {
        app.db('maps')
            .join('pins', 'pins.id', "=", "maps.pinId")
            .select('pins.name', 'pins.street', 'maps.x', 'maps.y')
            .then(maps => res.json(maps))
            .catch(err => res.status(500).send(err))
    }


    return { save, remove, get }

}