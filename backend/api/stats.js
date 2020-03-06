module.exports = app => {
    const Stat = app.mongoose.model('Stat', {
        user: Number,
        categories: Number,
        pins: Number,
        createdAt: Date
    })

    const get = (req, res) => {
        Stat.findOne({}, {}, { sort: { 'createdAt': -1 } })
            .then(stat => {
                const defaultStat = {
                    users: 0,
                    categories: 0,
                    pins: 0
                }
                res.json(stat || defaultStat)
            })
    }

    return { Stat, get }
}