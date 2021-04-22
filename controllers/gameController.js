const { Game, Developer, GameDeveloper } = require('../models')
const getRupiah = require('../helpers/getRupiah')
const tweet = require('../helpers/tweet')


class Controller {
    static getAllGames(req, res) {
        Game.findAll({ include: [Developer] })
            .then(games => {
                res.render('gameMain', { games, getRupiah })
            })
            .catch(err => res.send(err))
    }

    static getAddGame(req, res) {
        Developer.findAll()
            .then(developers => {
                res.render('gameAdd', { developers })
            })
            .catch(err => res.send(err))
    }

    static postAddGame(req, res) {
        const { name, price, genre, image, DeveloperId } = req.body
        const input = { name, price, genre, image }
        let gameId;
        Game.create(input)
            .then((game) => {
                const createLink = { GameId: game.id, DeveloperId }
                gameId = game.id
                return GameDeveloper.create(createLink, { isNewRecord: true })
            })
            .then(() => {
                return Game.findByPk(gameId, { include: [Developer] })
            })
            .then((gameDev) => {
                tweet(gameDev)
                res.redirect('/games')
            })
            .catch(err => res.send(err))
    }

    static getGameAddDev(req, res) {
        const GameId = req.params.id
        Developer.findAll()
            .then(developers => {
                res.render('gameAddDev', { GameId, developers })
            })
            .catch(err => res.send(err));
    }

    static postGameAddDev(req, res) {
        const GameId = +req.params.id
        const DeveloperId = +req.body.DeveloperId
        const createLink = { GameId, DeveloperId }
        GameDeveloper.create(createLink, { isNewRecord: true })
            .then(() => res.redirect('/games'))
            .catch(err => res.send(err))
    }

    static getBuyGame(req, res) {
        const Id = +req.params.id
        Game.findByPk(Id)
            .then(game => {
                game.increment('amountSold')
                res.redirect('/games')
            })
            .catch(err => res.send(err));
    }

    static getDeleteGame(req, res) {
        const Id = +req.params.id
        Game.destroy({ where: { id: Id } })
            .then(() => {
                res.redirect('/games')
            })
            .catch(err => res.send(err));
    }
}

module.exports = Controller