const bcrypt = require('bcrypt-nodejs')
const multer = require('../config/multerconfig.js')('users')
const router = require('express').Router()

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
        console.log(user)
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
                .then(_ => res.json(user))
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

    const savePhoto = async(req, res) => {
        // var storage = multer.diskStorage({
        //     destination: function(req, file, cb) {
        //         cb(null, './img/users/')
        //     },
        //     filename: function(req, file, cb) {
        //         cb(null, Date.now().toString() + '-' + user.id)
        //     }
        // // })
        // router.post('./save-image2', multer.single('image'), async(req, res, next) => {
        //     const user = {...req.body }
        //     const fileplace = {...req.file }
        //     console.log(user)
        //     console.log(fileplace)
        //     try {
        //         existsOrError(user.id, 'Id do usuário não informado')
        //             // existsOrError(user.image, 'Imagem está vazia')
        //     } catch (msg) {
        //         res.status(400).send(msg)
        //     }
        //     console.log('Passei por aqui')
        //     try {
        //         let rowsupdate = await app.db('users')
        //             .where({ id: user.id })
        //             .update({ imgUrl: fileplace.path })
        //         res.status(204).send()
        //     } catch (msg) {
        //         res.status(400).send(msg)
        //     }
        // })

        const user = {...req.body }
        const fileplace = {...req.file }
            // console.log(user)
            // console.log(fileplace)
        try {
            existsOrError(user.id, 'Id do usuário não informado')
        } catch (msg) {
            res.status(400).send(msg)
        }
        console.log('Passei por aqui')
        try {
            let rowsUpdated = await app.db('users')
                .where({ id: user.id })
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
                    <title> Teste de Imagem </title>
                </head>
                </body>
                    <!-- O enctype é de extrema importância! Não funciona sem! -->
                    <form action="/save-image/user/"  method="POST" enctype="multipart/form-data">
                        <p> Cuidado com o NAME!!! Tem que estar o mesmo que está escrito dessa forma para dar certo </p>
                        <p>  <xmp style='font-size:20px;background-color:green;width:30vw;display:block;text-align:center;color:white;'>"<input type="file" name="image">" </xmp></p>
                        <h3> id do dono da imagem </h3></br>
                        <input type='number' name='id'>
                        <h3> Upload da imagem </h3></br>
                        <input type="file" name="image"></br>
                        <button type="submit"> Enviar </button>
                    </form>
                </body>
            </html>
        `)
    }

    return { save, get, getById, remove, savePhoto, testPhoto }
}