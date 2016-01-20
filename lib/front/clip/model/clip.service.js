'use strict';
var angular = require('angular');
var _ = require('lodash');

clipService.$inject = ['$http'];

function clipService($http) {
  var BASE_URL = '/api/clips/';

  function Clip(data) {
    if (!(this instanceof Clip)) return new Clip(data);
    _.assign(this, data);
    this.url = '/api/clips/' + this._id;
  }

  Clip.prototype.$addCm = function (comment) {
    var _this = this;
    return $http.post(this.url + '/comments', {comment: comment}).success(function (res) {
      _this.comments.push(res);
    });
  };

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
