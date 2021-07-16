const ScoreController = require("../controllers/Score.controller");

module.exports = (app) => {
    app.post("/scores/new", ScoreController.addScore),
    app.get("/scores", ScoreController.allScores),
    app.put("/scores/:id/update", ScoreController.updateScore),
    app.delete("/scores/:id/delete", ScoreController.deleteScore)
}