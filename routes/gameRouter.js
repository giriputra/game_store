const router = require('express').Router();
const Controller = require('../controllers/gameController')

router.get('/', Controller.getAllGames)

router.get('/add', Controller.getAddGame)
router.post('/add', Controller.postAddGame)

router.get('/:id/add_developer', Controller.getGameAddDev)
router.post('/:id/add_developer', Controller.postGameAddDev)

router.get('/:id/buy', Controller.getBuyGame)
router.get('/:id/delete', Controller.getDeleteGame)


module.exports = router