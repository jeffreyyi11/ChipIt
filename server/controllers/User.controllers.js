const {User} = require("../models/User.models");
const {Score} = require("../models/Score.models");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports = {
    register: (req, res) => {
        User.findOne({email: req.body.email}, (err, user) => {
            if(err) {
                res.status(500).json({message: {msgBody: "Error has occured", msgError: true}});
            }
            if(user) {
                res.status(400).json({message: {msgBody: "Email is taken", msgError: true}});
            } else {
                User.create(req.body)
                    .then(user => {
                        const userToken = jwt.sign({
                            id: user._id
                        }, process.env.SECRET_KEY);
                        res.cookie('usertoken', userToken, secret, {
                            httpOnly: true
                        })
                        .json({msg: "Registration Successful"});
                    })
                    .catch(err => res.status(400).json(err));
            }
        });
    },
    login: async(req, res) => {
        const user = await User.findOne({email: req.body.email})
        if(user === null) {
            return res.status(500).json({message: {msg: "Error Occured"}})
        }
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        if(!correctPassword) {
            return res.status(400).json({message: {msg: "Incorrect Password"}});
        }
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);
        res.cookie('usertoken', userToken, secret, {
            httpOnly: true
        })
        .json({msg: "Successful Login"});
    },
    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.status(200).json({msg:"Logout Successful"})
    }
}