var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  User.find({})
  .then((users) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
  })
  .catch((err) => next(err));
});

router.post('/signup', (req, res, next) => {
  User.create(req.body)
  .then((user) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(user);
  })
  .catch((err) => next(err));
})

router.post('/login', passport.authenticate('local'),
  (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({'message': 'You are Successfully Logged in'});
  }
);

module.exports = router;
