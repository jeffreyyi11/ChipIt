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
        required: [true, "Please enter course par"],
        min: 1
    },
    holes: {
        type: Number,
        required: [true, "How many holes was the course"],
        min: 1
    },
    strokes: {
        type: Number,
        required: [true, "Please enter your score"],
        min: 1,
    }
}, {timestamps: true})

module.exports.Score = mongoose.model("Scores", ScoreSchema);