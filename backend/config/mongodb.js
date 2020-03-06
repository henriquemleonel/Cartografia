const mongoose = require('mongoose')
const { mongoDb } = require('../.env')

mongoose.connect(mongoDb.url, { useNewUrlParser: true })
    .catch(e => {
        let msg = 'Não foi possível conectar com mongodb'
        console.log("\x1b[41m", msg)
    })