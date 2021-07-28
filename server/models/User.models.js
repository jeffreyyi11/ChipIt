const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
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

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

UserSchema.pre('validate', function(next) {
    if(this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Passwords must match');
    }
    next();
})

module.exports.User = mongoose.model("User", UserSchema);