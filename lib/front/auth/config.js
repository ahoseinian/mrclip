config.$inject = ['$stateProvider'];

function config($stateProvider) {
  $stateProvider
    .state('app.login', {
      url: '/auth/login',
      templateUrl: 'auth/tpl/login.html',
      controller: require('./controllers/login'),
      controllerAs: 'vm'
    })
    .state('app.signup', {
      url: '/auth/signup',
      templateUrl: 'auth/tpl/signup.html',
      controller: require('./controllers/signup'),
      controllerAs: 'vm'
    });
}

module.exports = config;
