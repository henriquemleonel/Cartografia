module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = async(req, res) => {
        const category = {...req.body }
        if (req.params.id) category.id = req.params.id

        try {
            existsOrError(category.name, "Nome da categoria não informada")
                /* app.db(category)
                    .select()
                    .where({ name: category.name })
                    .then(categoryDb => {
                        if (categoryDb) throw "Essa categoria já existe"
                    }) */

            const categoryDb = await app.db('categories')
                .where({ name: category.name })
            notExistsOrError(categoryDb, "Essa categoria já existe")

        } catch (msg) {
            return res.status(400).send(msg)
        }

        if (category.id) {
            app.db('categories')
                .update(category)
                .where({ id: category.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('categories')
                .insert(category)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('categories')
            .select('id', 'name')
            .then(_ => res.json(_))
            .catch(err => res.status(500).send(err))
    }

    const remove = async(req, res) => {
        try {
            existsOrError(req.params.id, "Código da Categoria não infomado.")

            const user = await app.db("users")
                .where({ categoryId: req.params.id })
            notExistsOrError(users, "Existe um usuário com essa categoria.")

            const rowsDeleted = await app.db('categories')
                .where({ id: req.params.id }).del()
            existsOrError(rowDeleted, 'Categoria não encontrada')

        } catch (msg) {
            return res.status(400).send(msg)
        }
    }

    return { remove, save, get }
}