const router = require('express').Router();

const gameRouter = require('./gameRouter')
const developerRouter = require('./developerRouter')
const adminRouter = require('./adminRouter')

router.use('/', adminRouter)

router.use('/games', gameRouter)
router.use('/developers', developerRouter)


module.exports = router