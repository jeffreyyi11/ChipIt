const {Score} = require("../models/Score.models");

module.exports = {
    addScore: (req, res) => {
        Score.create(req.body)
            .then(score => res.json(score))
            .catch(err => res.status(400).json(err))
    },
    allScores: (req, res) => {
        Score.find()
            .then(scores => res.json(scores))
            .catch(err => res.status(400).json(err));
    },
    getScore: (req, res) => {
        Score.findOne({_id: req.params.id})
            .then(score => res.json(score))
            .catch(err => res.status(400).json(err))
    },
    updateScore: (req, res) => {
        Score.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators:true, new:true})
            .then(score => res.json(score))
            .catch(err => res.status(400).json(err));
    },
    deleteScore: (req, res) => {
        Score.deleteOne({_id: req.params.id})
            .then(score => console.log("deleted ", score))
            .catch(err => res.status(400).json(err));
    }
}