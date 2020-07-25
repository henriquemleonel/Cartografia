const bcrypt = require('bcrypt-nodejs')
const sp  = require("synchronized-promise")

module.exports = app => {
  const { existsOrError, notExistsOrError } = app.api.validation

  const save = async(req, res) => {
    const topic = {...req.body }
    if (req.params.id) topic.id = req.params.id
    existsOrError(topic.title, "Título não informado")
    existsOrError(topic.content, "Conteudo não informado")
    existsOrError(topic.userId, "Usuário não informado")
    existsOrError(topic.topicCategory, "Categoria principal não informada")
    //existsOrError(topic.categoriesTagged, "Categorias secundárias não informadas") Deletar, mas lembrar que há esse array

    //const topicFromDB = await app.db('topics')
    //.where({ id: topic.id }).first()


    //Avalia se tem ou não no cadastro
    //if (!topic.id) {
    //notExistsOrError(topicFromDB, "Topico já cadastrado")
    //}
    // catch (msg) {
    //return res.status(400).send(msg)
    //}

    console.log(topic)
    console.log(!topic.categoriesTagged)
    topic.createAt = new Date()

    // CONSERTAR O MALDITO PROMISE HELL!
    // Caso não exista Tags associadas 
    if(!topic.categoriesTagged){
      if (topic.id) {
        // Caso tenha se passado um ID como parâmetro, faça o update
        await app.db('topics')
          .update(topic)
          .where({ id: topic.id })
          .then(resp => {
            res.json(resp)
          })
          .catch(err => res.status(500).send(err))
      } else {
        await app.db('topics')
          .insert(topic)
          .then(
            async resp => {
              await app.db('topics')
                .select()
                .where({id:resp[0]})
                .first()
                .then(newresp =>{ 
                  console.log("Eu:", newresp)
                  res.json(newresp)
                })
                .catch(err => {
                  res.status(500).send(err)
                })
            }
          )
          .catch(err => res.status(500).send(err))
      }
    }

    // Casos existam tags
    if (topic.id) {
      app.db('topics')
        .update(topic)
        .where({ id: topic.id })
        .then(res.status(204).send())
        .catch(err => res.status(500).send(err))

    } else {

      let teste = ( category, topicId ) => {
        return app.db('topicsCategories')
          .insert({"topicId":topicId, "categoriesId":category})
          .then(res=>{ 
            console.log("category: ", category)
            console.log("topicId: ", topicId)
            console.log("respostas implementação das tags: ",res) 
          })
          .catch(err => console.log(err))
      }

      let teste2 = topicId =>{
        return app.db('topics')
          .select()
          .where({id:topicId})
          .first()
          .then(async topicNoTag => {
            await app.db('topicsCategories').select().where({ "topicId":topicNoTag.id }).then(
              tags => {
                console.log('tags:', tags)
                topicNoTag.categoriesTagged = []
                Array.from(tags).forEach(category =>{
                  topicNoTag.categoriesTagged.append(category)
                })

                console.log(topicNoTag)
                res.json(topicNoTag)
              }
            ).catch(err => {
              res.status(400).send(err)
            })

          })
          .catch(err => {
            res.status(501).send(err)
          })
      }

      let categoriesTagged = topic.categoriesTagged
      console.log(categoriesTagged)
      delete topic.categoriesTagged
      await app.db('topics')
        .insert(topic)
        .then(
           topicId => {
            console.log(topicId)
            categoriesTagged.forEach( category=>{
              console.log('ForEach: ', category)
              sp(teste)(category, topicId[0])
            })
            sp(teste2)(topicId)
          }
        )
        .catch(err => res.status(500).send(err))
    }

  }

  const get = (req, res) => {
    app.db('topics')
      .select('id', 'firstName', 'lastName', 'email', 'isValid')
      .whereNull('deletedAt')
      .then(topics => res.json(topics))
      .catch(err => res.status(500).send(err))
  }

  const getById = (req, res) => {
    app.db('topics')
      .select('firstName', 'lastName', 'email', 'isValid')
      .where({ id: req.params.id })
      .whereNull('deletedAt')
      .then(topic => res.json(topic))
      .catch(err => res.status(500).send(err))
  }

  const remove = async(req, res) => {
    try {
      const address = await app.db('addresses')
        .where({ topicId: req.params.id })
      notExistsOrError(address, "Esse usuário possui endereço")

      const rowsUpdated = await app.db('topics')
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
    //         cb(null, './img/topics/')
    //     },
    //     filename: function(req, file, cb) {
    //         cb(null, Date.now().toString() + '-' + topic.id)
    //     }
    // // })
    // router.post('./save-image2', multer.single('image'), async(req, res, next) => {
    //     const topic = {...req.body }
    //     const fileplace = {...req.file }
    //     console.log(topic)
    //     console.log(fileplace)
    //     try {
    //         existsOrError(topic.id, 'Id do usuário não informado')
    //             // existsOrError(topic.image, 'Imagem está vazia')
    //     } catch (msg) {
    //         res.status(400).send(msg)
    //     }
    //     console.log('Passei por aqui')
    //     try {
    //         let rowsupdate = await app.db('topics')
    //             .where({ id: topic.id })
    //             .update({ imgUrl: fileplace.path })
    //         res.status(204).send()
    //     } catch (msg) {
    //         res.status(400).send(msg)
    //     }
    // })

    const topic = {...req.body }
    const fileplace = {...req.file }
    // console.log(topic)
    // console.log(fileplace)
    try {
      existsOrError(topic.id, 'Id do usuário não informado')
    } catch (msg) {
      res.status(400).send(msg)
    }
    console.log('Passei por aqui')
    try {
      let rowsUpdated = await app.db('topics')
        .where({ id: topic.id })
        .update({ imgUrl: fileplace.path })
      console.log("resposta: " + rowsUpdated)
      res.send(fileplace.path)
    } catch (msg) {
      res.status(400).send('Tipo de arquivo Inválido')
    }

  }

  //const testPhoto = async(req, res) => {
  //res.send(`
  //<html>
  //<head> 
  //<title> Teste de Imagem </title>
  //</head>
  //</body>
  //<!-- O enctype é de extrema importância! Não funciona sem! -->
  //<form action="/save-image/topic/"  method="POST" enctype="multipart/form-data">
  //<p> Cuidado com o NAME!!! Tem que estar o mesmo que está escrito dessa forma para dar certo </p>
  //<p>  <xmp style='font-size:20px;background-color:green;width:30vw;display:block;text-align:center;color:white;'>"<input type="file" name="image">" </xmp></p>
  //<h3> id do dono da imagem </h3></br>
  //<input type='number' name='id'>
  //<h3> Upload da imagem </h3></br>
  //<input type="file" name="image"></br>
  //<button type="submit"> Enviar </button>
  //</form>
  //</body>
  //</html>
  //`)
  //}

  return { save, get, getById, remove, savePhoto }
}
