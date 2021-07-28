const UserController = require("../controllers/User.controllers");
const {authenticate} = require('../config/jwt.config');

module.exports = (app) => {
    app.post("/user/register", authenticate, UserController.register),
    app.post("/user/login", authenticate, UserController.login),
    app.post("/user/logout", UserController.logout)
}