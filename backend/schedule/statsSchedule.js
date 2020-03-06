const schedule = require('node-schedule')
module.exports = app => {
    schedule.scheduleJob('*/1****', async function() {
        const usersCount = await app.db('users').count('id').first()
        const categoriesCount = await app.db('categories').count('id').first()
        const pinsCount = await app.db('pins').count('id').first()

        const { Stat } = app.api.stats

        const lastStat = await Stat.findOne({}, {}, { sort: { 'createdAt': -1 } })

        const stat = new Stat({
            users: usersCount.count,
            categories: categoriesCount.count,
            pins: pinsCount.count,
            createAt: new Date()
        })

        const changeUsers = !lastStat || stat.users != lastStat.users
        const changeCategories = !lastStat || stat.categories !== lastStat.categories
        const changePins = !lastStat || stat.pins != lastStat.pins

        if (changeUsers || changeCategories || changePins) {
            stat.save().then(() => console.log('[Stats] Estatísticas atualizadas'))
        }
    })
}