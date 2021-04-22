const { Game } = require('../models')

class Controller {
    static showHomePage(req, res) {
        Game.findAll()
            .then(games => {
                res.render('homePage', { games })
            })
            .catch(err => res.send(err))
    }

    static getLogin(req, res) {
        res.render('login')
    }

    static postLogin(req, res) {
        const { username, password } = req.body
        if (username === 'admin' && password === 'admin') {
            req.session.role = 'admin'
            res.redirect('/')
        } else {
            res.redirect('/login')
        }
    }

    static getLogout(req, res) {
        req.session.destroy()
        res.redirect('/')
    }
}

module.exports = Controller