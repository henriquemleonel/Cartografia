const { authSecret } = require('../.env')
const jwt = require('jwt-simple') // Constrói Tokens
const bcrypt = require('bcrypt-nodejs') // Constrói a autênticação


module.exports = app => {
    const signin = async(req, res) => {
        try {
            if (!req.body.email || !req.body.password) {
                return res.status().send("Informe usário e senha")
            }

            const user = await app.db('users')
                .where({ email: req.body.email })
                .first()


            if (!user) return res.status(400).send("Usuário não encontrado!")

            const isMatch = bcrypt.compareSync(req.body.password, user.password)
            if (!isMatch) return res.status(401).send("email ou senha inválida.")
            const now = Math.floor(Date.now() / 1000)

            // Verifica se possui pin - Refatorar no futuro
            if (user.pinCompleted == true) {

                const pin = await app.db('pins')
                    .select('*')
                    .where({ userId: user.id })
                    .first()

                pin.description = pin.description.toString()

                const payload = {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    categoryId: user.categoryId,
                    isAdmin: user.isAdmin,
                    isValid: user.isValid,
                    pinCompleted: user.pinCompleted,
                    streetInfo: {
                        pinName: pin.id,
                        pinEmail: pin.email,
                        pinPhone: pin.phone,
                        pinStreet: pin.street,
                        pinNeighborhoor: pin.neighborhood,
                        pinNumber: pin.pinNumber,
                        pinCep: pin.cep
                    },
                    coordinates: {
                        lat: pin.lat,
                        long: pin.long
                    },
                    pinWeb: {
                        facebook: pin.linkF,
                        instagram: pin.linkIG,
                        outroLink: pin.otherlink
                    },
                    pinDescription: pin.description,
                    iat: now,
                    exp: now + (60 * 60 * 24 * 3)
                }

                res.json({
                    ...payload,
                    token: jwt.encode(payload, authSecret)
                })
            } else {
                const payload = {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    categoryId: user.categoryId,
                    isAdmin: user.isAdmin,
                    isValid: user.isValid,
                    pinCompleted: user.pinCompleted,
                    iat: now,
                    exp: now + (60 * 60 * 24 * 3)
                }

                res.json({
                    ...payload,
                    token: jwt.encode(payload, authSecret)
                })
            }
        } catch (e) {
            console.error(e)
        }
    }

    const validateToken = async(req, res) => {
        const userData = req.body || null
        try {
            if (userData) {
                const token = jwt.decode(userData.token, authSecret)
                if (new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch (e) {
            // Problemas com token
            console.error(e)
        }

        res.send(false)
    }

    return { signin, validateToken }
}