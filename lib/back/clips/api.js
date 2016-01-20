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
  Clip
    .findOne(req.query)
    .populate('comments._user', 'fullname')
    .exec(function (err, clip) {
      if (err) return next(err);
      res.json(clip);
    });
});

router.post('/:id/comments', require('../auth/authorize').isLoggedIn, function (req, res, next) {
  Clip.findOne(req.query).exec(function (err, clip) {
    if (err) return next(err);

    var cm = clip.comments.create({
      body: req.body.comment,
      _user: req.user
    });
    clip.comments.push(cm);
    clip.save(function (err) {
      if (err) return next(err);
      res.json(cm);
    });
  });
});

module.exports = router;
