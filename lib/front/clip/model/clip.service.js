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

  Clip.prototype = {
    $addCm: function (comment) {
      var _this = this;
      return $http.post(this.url + '/comments', {
        comment: comment
      }).success(function (res) {
        _this.comments.push(res);
      });
    },

    $thumb: function (mode) {
      var _this = this;
      $http.post(this.url + '/thumbs', {
        mode: mode
      }).success(function (res) {
        _this.thumbs = res;
      });
    },

    get score() {
      return ((this.thumbs.up / (this.thumbs.down || 1)) / (this.thumbs.up + this.thumbs.down)) * 10;
    }

  };

  var ftry = {
    item: {},
    items: [],
    query: query,
    findOne: findOne,
    search: search
  };
  return ftry;

  function query(query, sort) {
    return $http.get(BASE_URL, {
      params: {
        query: query,
        sort: sort
      }
    }).then(function (res) {
      return res.data.map(Clip);
    });
  }

  function findOne(params) {
    return $http.get(BASE_URL + 'show', {
      params: params
    }).success(function (res) {
      ftry.item = Clip(res);
    });
  }

  function search(query) {
    return $http.get(BASE_URL + 'search', {
      params: {
        query: query
      }
    });
  }
}

module.exports = clipService;
