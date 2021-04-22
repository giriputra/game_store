const router = require('express').Router();
const Controller = require('../controllers/developerController')

router.get('/', Controller.getDevelopers)
router.get('/add', Controller.getAddDevelopers)

module.exports = router