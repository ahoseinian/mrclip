'use strict';
var router = require('express').Router();
var Clip = require('../models/clip');

router.get('/', function (req, res, next) {
  Clip.find().exec(function (err, clips) {
    if (err) return next(err);
    res.json(clips);
  });
});

router.get('/show', function (req, res, next) {
  Clip.findOne(req.query).exec(function (err, clips) {
    if (err) return next(err);
    res.json(clips);
  });
});

module.exports = router;
