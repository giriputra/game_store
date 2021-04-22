const router = require('express').Router();

const gameRouter = require('./gameRouter')
const developerRouter = require('./developerRouter')

router.get('/', (req, res) => {
    res.render('homePage')
})

router.use('/games', gameRouter)
router.use('/developers', developerRouter)

module.exports = router