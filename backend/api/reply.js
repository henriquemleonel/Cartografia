module.exports = app => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

  const save = async(req, res) => {
    const reply = {...req.body }

    // Adiciona Like
    if (req.params.id) reply.id = req.params.id
    if(reply.id){
      await app.db.raw(`UPDATE replies SET replies.numberOflikes = replies.numberOflikes + 1 WHERE id = ${reply.id}`)
        .then(_ => res.send("Ok"))
        .catch(
          err => res.status(500).send(err)
        )
    }
    // Fim Adiciona Like

    try {
      existsOrError(reply.content, "Conteudo não informado")
      existsOrError(reply.userId, "Usuário não informado")
      existsOrError(reply.topicId, "Diálogo não informado")

    } catch (msg) {

      return res.status(400).send(msg)

    }

    reply.createAt = new Date()
    reply.numberOfLikes = 0

    app.db.raw(`UPDATE topics SET topics.numerOfReplies = topics.numerOfReplies + 1 WHERE id = ${reply.topicId}`)
      .then(_=> { 
        console.log(_)
        console.log("topic + 1 Ok") 
      })
      .catch(err => res.status(500).send(err))

    app.db("replies").insert(reply)
      .then(_=>  res.send("comentário adicionado com sucesso"))
      .catch(err => res.status(400).send(err))

  }



  const getById = (req, res) => {
    let reply = {}
    console.log(req.params)
    reply.id = req.params.id
    console.log(reply.id)

    
    try {
      existsOrError(reply.id, "id não encontrado")

    } catch(msg){
      return res.status(400).send(msg)

    }

    // Procure por answers!
    let procureAnswers = function(reply){
      return app.db('repliesAnswer').select().where('replyId', reply.id)
        .then(resp => {
          reply.answerId = []
          console.log(resp)

          resp.forEach( answerPacket => {
              console.log(answerPacket.answerId)
              reply.answerId.push(answerPacket.answerId)     
            })

          console.log("reply: ", reply)
          endRequest(reply)
        })
        .catch(err => res.status(500).send(err))
    }

    // Append os Answers
    let appendAnwsers = function(reply){
      return app.db('repliesAnswer').select().where('answerId', reply.answerId)
    }
    
    // Final do request
    let endRequest = function(resp){
      res.json(resp) 
    }
    
    //Procure pelo reply
    app.db('replies').where("id", reply.id).select().first()
      .then(resp => {
        console.log("resp: ", resp)
        reply = resp
        console.log("reply: ", reply)
        procureAnswers(reply)
      })
      .catch( err => res.status(400).send(err))
  }
  
  const getCurrentTopicReplies = async(req, res) =>{
    topicId = req.params.id
    app.db('replies').select()
      .where('topicId', topicId)
      .orderBy('createAt','desc')
      .then(resp =>{
        res.json(resp)
      }).catch(err => {
        res.status(500).send(err)
      })
  }

  const remove = async(req, res) => {
    try {
      const address = await app.db('addresses')
        .where({ userId: req.params.id })
      notExistsOrError(address, "Esse usuário possui endereço")

      const rowsUpdated = await app.db('replies')
        .update({ deletedAt: new Date() })
        .where({ id: req.params.id })
      existsOrError(rowsUpdated, "Usuário não encontrado")
      res.status(204).send()
    } catch (msg) {
      res.status(400).send(msg)
    }
  }


  return {save, getById, getCurrentTopicReplies}
}
