const router = require('express').Router();
const Controller = require('../controllers/gameController')

router.get('/', Controller.getAllGames)
router.get('/user', Controller.getAllGamesUser)

router.get('/add', Controller.getAddGame)
// router.post('/add', Controller.postAddGame)


module.exports = router