'use strict';
var router = require('express').Router();
var Clip = require('../models/clip');
var formidable = require('formidable');

router.get('/new', function (req, res) {
  res.render('clips/new');
});

router.post('/', function (req, res, next) {
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files) {
    var clip = new Clip(fields);
    clip.save(function (err) {
      if (err) return next(err);
      clip.saveClip(files.clip, function (err, clip) {
        if (err) return next(err);

        clip.saveImage(files.image, function (err) {
          if (err) return next(err);
          res.json(clip);
        });

      });
    });

  });

});

module.exports = router;
