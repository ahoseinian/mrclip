'use strict';
var angular = require('angular');
module.exports = angular
  .module('app.auth', [
    require('angular-ui-router').default
  ])
  .config(require('./config'));
