'use strict';
var fs = require('fs');
var mongoose = require('../db');
var lwip = require('lwip');
var async = require('async');

var ClipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  comments: [{
    body: String,
    date: {
      type: Date,
      default: Date.now
    },
    _user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  date: {
    type: Date,
    default: Date.now
  },
  hidden: Boolean,
  thumbs: {
    up: {
      type: Number,
      default: 0
    },
    down: {
      type: Number,
      default: 0
    },
    _users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  viewCount: {
    type: Number,
    default: 0
  },
  size: Number
}, {
  toJSON: {
    virtuals: true,
    transform: function (doc, ret) {
      if (ret.thumbs) delete ret.thumbs._users;
      return ret;
    }
  }
});

ClipSchema.methods.saveClip = function (file, cb) {
  var _this = this;
  fs.readFile(file.path, function (err, data) {
    var newPath = __dirname + '/../../storage/data/' + _this._id + '.mp4';
    fs.writeFile(newPath, data, function (err) {
      return cb(err, _this);
    });
  });
};

ClipSchema.methods.saveImage = function (file, cb) {
  var _this = this;
  async.series([
    function (callback) {
      lwip.open(file.path, 'JPEG', function (err, img) {

        console.log(err, img);
        if (err) return callback(err);
        img.batch().resize(800, 450).writeFile(__dirname + '/../../storage/images/800/' + _this._id + '.jpg', callback);
      });
    },
    function (callback) {
      lwip.open(file.path, 'JPEG', function (err, img) {
        if (err) return callback(err);
        img.batch().resize(400, 225).writeFile(__dirname + '/../../storage/images/400/' + _this._id + '.jpg', callback);
      });
    },
    function (callback) {
      lwip.open(file.path, 'JPEG', function (err, img) {
        if (err) return callback(err);
        img.batch().resize(200, 112).writeFile(__dirname + '/../../storage/images/200/' + _this._id + '.jpg', callback);
      });
    },
    function (callback) {
      lwip.open(file.path, 'JPEG', function (err, img) {
        if (err) return callback(err);
        img.batch().resize(150, 84).writeFile(__dirname + '/../../storage/images/150/' + _this._id + '.jpg', callback);
      });
    },
    function (callback) {
      lwip.open(file.path, 'JPEG', function (err, img) {
        if (err) return callback(err);
        img.batch().resize(100, 56).writeFile(__dirname + '/../../storage/images/100/' + _this._id + '.jpg', callback);
      });
    }
  ], cb);

};

//virtuals
ClipSchema.virtual('address').get(function () {
  return 'data/' + this._id + '.mp4';
});
ClipSchema.virtual('poster.eight').get(function () {
  return 'images/800/' + this._id + '.jpg';
});

module.exports = mongoose.model('Clip', ClipSchema);
