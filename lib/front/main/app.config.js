'use strict';

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      abstract: true,
      resolve: {
        clipPrepService: require('../clip/model/prep.service')
      },
      views: {
        sidebar: {
          templateUrl: 'main/tpl/sidebar.html',
          controller: require('./controller/sidebar'),
          controllerAs: 'vm'
        },
        main: {
          templateUrl: 'main/tpl/index.html',
          controller: require('./controller/app.js'),
          controllerAs: 'vm'
        },
        navbar:{
          templateUrl: 'main/tpl/navbar.html'
        }
      }
    })
    .state('app.home', {
      url: '/',
      templateUrl: 'main/tpl/home.html',
      controller: require('./controller/app.js'),
      controllerAs: 'vm'
    });
}

module.exports = config;
