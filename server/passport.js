const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const jwtStrategy = require("passport-jwt").Strategy;
const User = require("./models/User.models");

//get cookie from request
const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["accessToken"];
    }
    return token;
}

//authorization
passport.use(new jwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: "chips"
}, (payload, done) => {
    User.findById({_id: payload.sub}, (user, err) => {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        }
        // no user found;
        return done(null, false);
    })
}));

// authenticate local strategy with email/password
passport.use(new localStrategy((email, password, done) => {
    User.findOne({email}, (err, user) => {
        //error in db
        if(err) {
            return done(err);
        }
        //no existing user
        if(!user) {
            return done(null, false);
        }
        //check password for found user
        user.comparePassword(password, done);
    });
}));