const { Developer, Game } = require('../models')
const getRupiah = require('../helpers/getRupiah')

class Controller {
    static getDevelopers(req, res) {
        Developer.findAll({ include: [Game] })
            .then(developers => {
                let generateNumber = Math.round(Math.random() * developers.length)
                let quote = Developer.quote(generateNumber)
                res.render('developerMain', { developers, quote, getRupiah })
            })
            .catch(err => res.send(err));
    }
}

module.exports = Controller