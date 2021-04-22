const { Developer } = require('../models')

class Controller {
    static getDevelopers(req, res) {
        Developer.findAll()
            .then(developers => {
                res.send(developers)
            })
            .catch(err => res.send(err));
    }
}

module.exports = Controller