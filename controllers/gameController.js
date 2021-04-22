const { Game } = require('../models')

class Controller {
    static getAddGame(req, res) {
        res.render ('gameAdd')
    }

    static getAllGames(req, res) {
        // Game.findAll()
        //     .then(games => {
        //         res.render ('gameMain')
        //     })
        res.render ('gameMainAdmin')
    }

    static getAllGamesUser(req, res) {
        // Game.findAll()
        //     .then(games => {
        //         res.render ('gameMain')
        //     })
        res.render ('gameMainUser')
    }
}

module.exports = Controller