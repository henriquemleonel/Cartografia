module.exports = middleware => {
    return (req, res, next) => {
        if (req.user.isAdmin) {
            middleware(req, res, next)
        } else {
            res.status(402).send("Esse usuário não é administrador")
        }
    }
}