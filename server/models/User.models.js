const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email required"]
    },
    username: {
        type: String,
        required: [true, "Username required"],
        minlength: [6, "Username must be at least 6 characters"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [8, "Password must be at least 8 characters"]},
    scores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Score"
    }]
}, {timestamps: true})

UserSchema.pre('save', function(next){
    if(!this.isModified('password'))
    return next();
    bcrypt.hash(this.password, 10, (err, hashedPW) => {
        if(err) {
            return next(err);
        }
        this.password = hashedPW;
        next();
    });
});

UserSchema.methods.comparePassword = (password, cb) => {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if(err){
            return cb(err);
        } else {
            if(!isMatch){
                return cb(null, isMatch);
            }
            return cb(null, this);
        }
    });
};

module.exports.User = mongoose.model("User", UserSchema);