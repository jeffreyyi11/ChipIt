const ScoreController = require("../controllers/Score.controller");

module.exports = (app) => {
    app.post("/scores/new", ScoreController.addScore),
    app.get("/scores", ScoreController.allScores),
    app.get("/score/:id", ScoreController.getScore),
    app.put("/scores/:id/update", ScoreController.updateScore),
    app.delete("/scores/delete/:id", ScoreController.deleteScore)
}