const router = require('express').Router();
const Controller = require('../controllers/developerController')

router.get('/', (req, res) => {
    res.send('hello world from developer router.')
})


module.exports = router