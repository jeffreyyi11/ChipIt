const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
    date: {
        type: Date,
    },
    courseName: {
        type: String,
        required: [true, "Please enter a course name"]
    },
    coursePar: {
        type: Number,
        required: [true, "Please enter course par"]
    },
    holes: {
        type: Number,
        required: [true, "How many holes was the course"]
    },
    strokes: {
        type: Number,
        required: [true, "Please enter your score"]
    }
})

module.exports.Score = mongoose.model("Scores", ScoreSchema);