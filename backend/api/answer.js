module.exports = app => {
  const { existsOrError, notExistsOrError } = app.api.validation

  const save = async(req, res) => {

    const answer = {...req.body }
    if (req.params.id) answer.id = req.params.id

    // Adiciona Like
    console.log(answer.id)
    if(answer.id){
      await app.db.raw(`UPDATE answer SET answer.numberOflikes = answer.numberOflikes + 1 WHERE id = ${answer.id}`)
        .then(_ => res.send("Ok"))
        .catch(
          err => res.status(500).send()
        )
    }
    // Fim Adiciona Like
    
    try {
      existsOrError(answer.content, "Conteudo não informado")
      existsOrError(answer.userId, "Usuário não informado")
      existsOrError(answer.replyId, "Comentário a ser respondido não informado")

    } catch (msg) {
      return res.status(400).send(msg)
    }

    answer.createAt = new Date()
    // Flowchart : Adiciona no answer -> Adiciona no repliesAnswer -> recupere o answer
    answer.numberOfLikes = 0

    let addToRepliesAnswer = answer =>{
      return app.db("repliesAnswer").insert({replyId:answer.replyId, answerId:answer.id }).then(
        resp =>{ 
          console.log(resp)
          res.send("Resposta adicionada com sucesso")
        }
      )
    }

    app.db("answer").insert(answer)
      .then(resp => {
        answer.id = resp[0]
        console.log(answer)
        addToRepliesAnswer(answer)
      })
      .catch(err => res.status(400).send(err))

  }

  const getById = (req, res) => {
    let answer
    answer.id = req.params.id
    try {
      existsOrError(answer.id, "id não encontrado")
    } catch(msg){
      return res.status(400).send(msg)
    }

    // Procure por answers!
    let procureAnswers = function(nextFunction){
      return app.db('repliesAnswer').select().where('answerId', answerId)
        .then(resp => {
          answer.answer = resp
          nextFunction(resp)
        })
        .catch(err => res.status(500).send(err))
    }

    // Append os Answers
    let appendAnwsers = function(nextFunction){
      return app.db('answer').select().where('answerId', )
    }
    
    // Final do request
    let endRequest = function(resp){
      res.json(resp) 
    }
    
    //Procure pelo answer
    app.db('replies').where("id", answer.id).select()
      .then(resp => {
        answer = resp
        procureAnswers(endRequest)
      })
      .catch( err => res.status(400).send(err))
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


  return {save, getById}
}
