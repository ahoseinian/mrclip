'use strict';
var angular = require('angular');
var Clip = require('./model.js');

clipService.$inject = ['$http'];

function clipService($http) {
  var BASE_URL = '/api/clips/';
  var ftry = {
    item: {},
    items: [],
    query: query,
    findOne: findOne
  };
  return ftry;

  function query(params) {
    return $http.get(BASE_URL, {
      params: params
    }).success(function (res) {
      angular.copy(res.map(Clip), ftry.items);
    });
  }

  function findOne(params) {
    return $http.get(BASE_URL + 'show', {
      params: params
    }).success(function (res) {
      ftry.item = Clip(res);
    });
  }
}

module.exports = clipService;
