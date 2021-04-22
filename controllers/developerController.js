const { Developer, Game } = require('../models')
const getRupiah = require('../helpers/getRupiah')

class Controller {
    static getDevelopers(req, res) {
        Developer.findAll({ include: [Game] })
            .then(developers => {
                let quote = Developer.quote()
                res.render('developerMain', { developers, quote, getRupiah })
            })
            .catch(err => res.send(err));
    }

    static showHomePage(req, res) {
        Game.findAll()
            .then(games => {
                console.log(games);
                res.render('homePage', { games })
            })
            .catch(err => res.send(err))
    }
}

module.exports = Controller