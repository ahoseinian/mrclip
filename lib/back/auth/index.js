'use strict';
var express = require('express');
var router = express.Router();
var passport = require('./passport');
var User = require('../models/user');

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/failure'
}));

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// process the signup form
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/', // redirect to the secure profile section
  failureRedirect: '/auth/signup?error=true', // redirect back to the signup page if there is an error
  failureFlash: true // allow flash messages
}));

router.get('/email/:email/free', function (req, res, next) {
  User.findOne({
    email: req.params.email
  }, function (err, user) {
    if (err) return next(err);
    console.log(user);
    res.json({
      success: !user
    });
  });
});

module.exports = router;
