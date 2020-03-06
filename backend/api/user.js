const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async(req, res) => {
        const user = {...req.body }
        if (req.params.id) user.id = req.params.id

        try {
            existsOrError(user.firstName, "Nome não informado")
            existsOrError(user.lastName, "Nome não informado")
            existsOrError(user.email, "E-mail não informado")
            existsOrError(user.password, "Senha não informada")
            existsOrError(user.confirmPassword, "Confirmação de senha não informada não informada")
            equalsOrError(user.password, user.confirmPassword, "As senhas não conferem")
            existsOrError(user.categoryId, "Categoria não informada")

            const userFromDB = await app.db('users')
                .where({ email: user.email }).first()

            if (!user.id) {
                notExistsOrError(userFromDB, "Usuário já foi cadastrado")
            }


        } catch (msg) {
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(req.body.password)
        delete user.confirmPassword

        if (user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .whereNull('deletedAt')
                .then(res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('users')
            .select('id', 'firstName', 'lastName', 'email', 'isValid')
            .whereNull('deletedAt')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('users')
            .select('firstName', 'lastName', 'email', 'isValid')
            .where({ id: req.params.id })
            .whereNull('deletedAt')
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    const remove = async(req, res) => {
        try {
            const address = await app.db('addresses')
                .where({ userId: req.params.id })
            notExistsOrError(address, "Esse usuário possui endereço")

            const rowsUpdated = await app.db('users')
                .update({ deletedAt: new Date() })
                .where({ id: req.params.id })
            existsOrError(rowsUpdated, "Usuário não encontrado")
            res.status(204).send()
        } catch (msg) {
            res.status(400).send(msg)
        }
    }

    return { save, get, getById, remove }
}