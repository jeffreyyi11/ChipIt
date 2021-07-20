const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ChipIt", {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false,
})
    .then(() => console.log("connected to db"))
    .catch(err => console.log("Error", err));