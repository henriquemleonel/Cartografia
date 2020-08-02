module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        const pin = {...req.body }

        if (req.params.id) pin.id = req.params.id

        try {
            existsOrError(pin.name, "Nome do pin não informado")
            existsOrError(pin.email, "Email do pin não informado")
            existsOrError(pin.phone, "Telefone não informado")
            existsOrError(pin.street, "Rua não informada")
            existsOrError(pin.neighborhood, "Bairro não informado")
            existsOrError(pin.number, "Numero da casa não informada")
            existsOrError(pin.userId, "ID usuário não informado")
            existsOrError(pin.cep, "CEP não informado")
        } catch (msg) {
            res.status(400).send(msg)
        }

        if (pin.id) {
            app.db('pins')
                .update(pin)
                .where({ id: pin.id })
                .then(newPin => res.status(204).send(newPin))
                .catch(err => res.status(500).send(err))
        } else {
            app.config.locationiq.requestLocation(pin.street, "campo grande", "campo grande", "mato grosso do sul", pin.number, pin.cep)
                .then(locReq => {
                    console.log(locReq.data[0])
                    pin.lat = locReq.data[0].lat
                    pin.long = locReq.data[0].lon
                    app.db("pins")
                        .insert(pin)
                        .then(newPin => res.send("Pin registrado com sucesso"))
                        .catch(err => res.status(500).send())
                    app.db('users')
                        .where({ id: pin.userId })
                        .update({ pinCompleted: true })
                        .then(_ => _)
                        .catch(err => res.status(500).send(err))
                }).catch(locError => {
                    res.status(400).send("Local não encontrado")
                })
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
            .select("*")
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

    const savePhoto = async(req, res) => {
        const pins = {...req.body }
        const fileplace = {...req.file }
        try {
            existsOrError(pins.id, 'pins id não informado')
        } catch (msg) {
            res.status(400).send(msg)
        }

        console.log('Passei por aqui')

        try {
            let rowsUpdated = await app.db('pins')
                .where({ id: pins.id })
                .update({ imgUrl: fileplace.path })
            console.log("resposta: " + rowsUpdated)
            res.send(fileplace.path)
        } catch (msg) {
            res.status(400).send('Tipo de arquivo Inválido')
        }

    }

    const testPhoto = async(req, res) => {
        res.send(`
        <html>
                <head> 
                    <title> Teste de Imagem Pins</title>
                </head>
                </body>
                    <!-- O enctype é de extrema importância! Não funciona sem! -->
                    <form action="/save-image/pins/"  method="POST" enctype="multipart/form-data">
                        <p> Cuidado com o NAME!!! Tem que estar o mesmo que está escrito dessa forma para dar certo </p>
                        <h3> id do pin da imagem </h3></br>
                        <input type='number' name='id'>
                        <h3> Upload da imagem </h3></br>
                        <input type="file" name="image"></br>
                        <button type="submit"> Enviar </button>
                    </form>
                </body>
            </html>
        `)
    }

    return { getById, get, remove, save ,testPhoto, savePhoto}
}
