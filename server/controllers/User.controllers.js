const {User} = require("../models/User.models");

module.exports = {
    create: (req, res) => {
        User.create(req.body)
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err))
    },
    findAll: (req, res) => {
        User.find()
            .then(users => res.json(users))
            .catch(err => res.status(400).json(err))
    },
    findOne: (req, res) => {
        User.findOne({_id: req.params.id})
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err))
    },
    delete: (req, res) => {
        User.deleteOne({_id: req.params.id})
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err))
    }
}