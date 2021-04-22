const router = require('express').Router();
const Controller = require('../controllers/developerController')

router.get('/', Controller.getDevelopers)


module.exports = router