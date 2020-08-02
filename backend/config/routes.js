const admin = require("./admin.js")
const multer = require('../config/multerconfig.js')
const uploaderUsers = multer('users')
const uploaderEvents = multer('public/events')
const uploaderPins = multer('pins')

module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

// Início User
    app.route('/users')
        .all(app.config.passport.authenticate())
        .get(app.api.user.get)
        .post(app.api.user.save)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.user.save)
        .get(app.api.user.getById)
        .delete(app.api.user.remove)

    app.route('/save-image/user/')
        .post(uploaderUsers.single('image'), app.api.user.savePhoto)

    app.route('/teste-imagem/user/')
        .get(app.api.user.testPhoto)

// Fim User
  
    app.route('/categories')
        .all(app.config.passport.authenticate())
        .post(app.api.category.save)
        .get(app.api.category.get)

    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .delete(admin(app.api.category.remove))

    app.route('/addresses/')
        .all(app.config.passport.authenticate())
        .post(app.api.address.save)
        .get(app.api.address.get)

    app.route('/addresses/:id')
        .all(app.config.passport.authenticate())
        .delete(admin(app.api.address.remove))
        .post(app.api.address.save)

// Router pins
    app.route('/pins/')
        .all(app.config.passport.authenticate())
        .get(app.api.pins.get)
        .post(app.api.pins.save)

    app.route('/pins/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.pins.getById)
        .post(app.api.pins.save)
        .delete(app.api.pins.remove)

    app.route('/save-image/pins/')
        .post(uploaderPins.single('image'), app.api.pins.savePhoto)

    app.route('/teste-imagem/pins/')
        .get(app.api.pins.testPhoto)

// Fim pins
  
    app.route('/maps/')
        .all(app.config.passport.authenticate())
        .get(app.api.maps.get)
        .post(app.api.maps.save)
        .delete(app.api.maps.remove)

  // Está faltando a altênticação, cuidado, tem que colocar de pois 
    app.route('/topic/')
        .post(app.api.topics.save)

    app.route('/topic/:id')
        .get(app.api.topics.getById)

    app.route('/topicsmostrecent/')
        .get(app.api.topics.getMostRecent)

    app.route('/topicsmostreplyededs/')
        .get(app.api.topics.getMostReplyededs)

  // Fim topics
  // Rota Reply
  
    app.route('/reply/')
        .post(app.api.reply.save)

    app.route('/reply/:id')
        .get(app.api.reply.getById)

  // fim Rota Reply
  // Rota answer
  
    app.route('/answer/')
        .post(app.api.answer.save)

    app.route('/answer/:id')
        .get(app.api.answer.getById)
        .post(app.api.answer.save)

  // Fim Answer
  // Rota answer
  
    app.route('/event/')

    app.route('/event/:id')

  // Fim Answer
    //app.route('/stats')
        //.get(app.api.stats.get)


}
