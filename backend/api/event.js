module.exports = app => {
  const { existsOrError, notExistsOrError } = app.api.validation

  const save = async(req, res) => {
    let eventP = {...req.body }
    if (req.params.id) eventP.id = req.params.id
    
    existsOrError(eventP.title, "Título não informado")
    existsOrError(eventP.userId, "Usuário não informado")
    existsOrError(eventP.categoryId, "Categoria não informada")
    existsOrError(eventP.description, "descrição não informado")
    existsOrError(eventP.date, "data não informada")

    eventP.createAt = new Date()

    if(eventP.id){
      app.db('events').update(eventP)
        .where({id:eventP.id})
        .then( _ => {
          res.send("Evento atualizado com sucesso")
        }).catch(err => {
          res.status(204).send(err)
        })
    }

    app.db('events').insert(eventP)
      .then(resp => {
        res.send("Evento salvo com sucesso")
      }).catch(err => {
        res.status(400).send(err)
      })

  }


  const getById = (req, res) => {
    let eventP = {}
    eventP.id = req.params.id
    app.db('events').select()
      .where("id", eventP.id)
      .first()
      .then(resp => {
        res.json(resp)
      }).catch(err => {
        res.status(400).send(err)
      })

  }


  const savePhoto = async(req, res) => {
    const eventP = {...req.body }
    const fileplace = {...req.file }
    try {
      existsOrError(eventP.id, 'evento id não informado')
    } catch (msg) {
      res.status(400).send(msg)
    }

    console.log('Passei por aqui')

    try {
      let rowsUpdated = await app.db('events')
        .where({ id: eventP.id })
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
                    <form action="/save-image/events/"  method="POST" enctype="multipart/form-data">
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

  return { save, getById , testPhoto, savePhoto}
}
