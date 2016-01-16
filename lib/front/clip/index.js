'use strict';
var angular = require('angular');
var appClipModule = angular
  .module('app.clip', [
    require('angular-ui-router').default,
    require('angular-sanitize'),
    require('videogular'),
    require('videogular-controls'),
    require('videogular-overlay-play'),
    require('videogular-poster')
  ])
  .config(require('./clip.config'))
  .factory('clipService', require('./model/clip.service'));

module.exports = appClipModule;
