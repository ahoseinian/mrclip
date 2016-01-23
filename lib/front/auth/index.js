'use strict';
var angular = require('angular');
require('angular-recaptcha');

module.exports = angular
  .module('app.auth', [
    require('angular-ui-router').default,
    'vcRecaptcha'
  ])
  .config(require('./config'));
