module.exports = app => {
    const {existsOrError, notExistsOrError} = app.api.validation

    const save = (req, res) => {
        const address = {...req.body}

        if(!req.params.id) address.id = req.params.id

        try {
            existsOrError(address.street, "Rua não informada")
            existsOrError(address.streetNumber, "Número da casa não informada")
            existsOrError(address.zipCode, "CEP não informado")
            existsOrError(address.neighborhood, "Bairro não informado")
            existsOrError(address.userId, "Usuário pertencente não informado")
        } catch (msg) {
            return res.status(500).send(msg)
        }

        if(address.id) {
            app.db('addresses')
            .update(address)
            .where({id: address.id})
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
        } else {
            app.db('addresses')
            .insert(address)
            .then(_=> res.status(204).send(_))
            .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try{
            existsOrError(req.params.id, 'Código do endereço não informado.')

            const rowDeleted = await app.db('addresses')
                .where({id:req.params.id})
                .del()
            
            existsOrError(rowDeleted, 'Enderesso não foi encontrado')
            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    const get = (req,res) => {
        app.db('addresses')
            .then(addresses => res.json(addresses))
            .catch(err => res.status(500).send(err))
    }

    const getByUser =(req, res) => {
        
    }

    return {get, save, remove}
}