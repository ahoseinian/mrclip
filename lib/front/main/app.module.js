'use strict';
var angular = require('angular');
module.exports = angular.module('app', [
  require('angular-ui-router').default,
  require('../clip').name,
  require('../auth').name,
  require('./templates').name
]).config(require('./app.config'))
.filter('bytes', require('./filters/bytes'));
