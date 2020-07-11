var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');

exports.local = passport.use(new LocalStrategy(
    (username, password, done) => {
        User.findOne({username: username})
        .then((user) => {
            if(user.password === password) {
                return done(null, user);
            }
            else {
                return done(null, false, {message: 'Invalid Password'});
            }
        })
        .catch((err) => {return done(err)});
    })
);

