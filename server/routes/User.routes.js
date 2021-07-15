const UserController = require("../controllers/User.controllers");

module.exports = (app) => {
    app.post("/users/new", UserController.create),
    app.get("/users/:id", UserController.findOne),
    app.get("/users/all", UserController.findAll),
    app.delete("/users/:id/delete", UserController.delete)
}