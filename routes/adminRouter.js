const router = require('express').Router();
const Controller = require('../controllers/adminController')

router.get('/', Controller.showHomePage)

router.get('/login', Controller.getLogin)
router.post('/login', Controller.postLogin)

router.get('/logout', Controller.getLogout)

module.exports = router