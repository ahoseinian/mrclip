'use strict';
var router = require('express').Router();
var Clip = require('../models/clip');
var formidable = require('formidable');
var async = require('async');
var fs = require('fs');

router.get('/new', function (req, res, next) {
  Clip.find(function (err, clips) {
    if (err) return next(err);
    res.render('clips/new', {
      items: clips
    });
  });
});

router.get('/delete/:id', function (req, res, next) {

  Clip.remove({
    _id: req.params.id
  }, function (err) {
    if (err) return next(err);
    async.eachSeries([800, 400, 200, 150, 100], function (size, cb) {
      console.log(size);
      fs.unlink(__dirname + '/../../storage/images/' + size + '/' + req.params.id + '.jpg', cb);
    }, function () {
      fs.unlink(__dirname + '/../../storage/data/' + req.params.id + '.mp4', function (err) {
        console.log(err);
        res.redirect('/clips/new');
      });
    });
  });

});

router.post('/', function (req, res, next) {
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files) {
    var clip = new Clip(fields);
    clip.size = files.clip.size;
    clip.save(function (err) {
      if (err) return next(err);
      clip.saveClip(files.clip, function (err, clip) {
        if (err) return next(err);

        clip.saveImage(files.image, function (err) {
          if (err) return next(err);
          res.redirect('/clips/new');
        });

      });
    });

  });

});

module.exports = router;
