const router = require('express').Router();
const Controller = require('../controllers/gameController')

router.get('/', Controller.getAllGames)

router.get('/:id/buy', Controller.getBuyGame)

// middleware
const isLogin = (req, res, next) => {
    if (req.session.role === 'admin') {
        next()
    } else {
        res.redirect('/login')
    }
}

router.use(isLogin)

router.get('/admin', Controller.getAdmin)

router.get('/add', Controller.getAddGame)
router.post('/add', Controller.postAddGame)

router.get('/:id/add_developer', Controller.getGameAddDev)
router.post('/:id/add_developer', Controller.postGameAddDev)

router.get('/:id/delete', Controller.getDeleteGame)

module.exports = router