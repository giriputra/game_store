const { Game } = require('../models')

class Controller {
    static getAddGame(req, res) {
        res.send('bla')
    }

    static getAllGames(req, res) {
        Game.findAll()
            .then(games => {
                res.render('g')
            })
    }
}

module.exports = Controller