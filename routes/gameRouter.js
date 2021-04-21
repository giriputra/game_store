const router = require('express').Router();
const Controller = require('../controllers/gameController')

router.get('/', (req, res) => {
    res.send('hello world from game router.')
})

module.exports = router