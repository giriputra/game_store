const { Developer } = require('../models')

class Controller {
    // static getDevelopers(req, res) {
    //     Developer.findAll()
    //         .then(developers => {
    //             res.send(developers)
    //         })
    //         .catch(err => res.send(err));
    // }
    static getAddDevelopers ( req, res ) {
        res.render ( 'developerAdd' )
    }
    static getDevelopers ( req, res ) {
        res.render ( 'developerMain' )
    }
}

module.exports = Controller