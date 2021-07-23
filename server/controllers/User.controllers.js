const {User} = require("../models/User.models");
const passport = require("passport");
const passportConfg = require("../passport");
const Score = require("../models/Score.models");
const JWT = require("jsonwebtoken");

module.exports = {
    create: (req, res) => {
        User.findOne({email: req.body.email}, (user, err) => {
            if(err) {
                res.status(500).json({message: {msgBody: "Error has occured", msgError: true}});
            }
            if(user) {
                res.status(400).json({message: {msgBody: "Email is taken", msgError: true}});
            } else {
                User.create(req.body)
                    .then(user => res.status(201).json({message: {msgBody: "Registration Successful", msgError: false}}))
                    .catch(err => res.status(400).json({message: {msgBody: "Error", msgError: true}}))
            }
        });
    },
    login: (req, res) => {
        
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