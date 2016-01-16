config.$inject = ['$stateProvider'];

function config($stateProvider) {
  $stateProvider
    .state('app.clip', {
      url: '/clip',
      templateUrl: 'clip/tpl/index.html',
      controller: require('./controllers'),
      controllerAs: 'vm'
    })
    .state('app.clip.show', {
      url: '/:id/:title',
      templateUrl: 'clip/tpl/show.html',
      controller: require('./controllers/show'),
      controllerAs: 'vm',
      resolve: {
        showPrepService: showPrepService
      }
    });
}

module.exports = config;

showPrepService.$inject = ['clipService', '$stateParams'];

function showPrepService(clipService, $stateParams) {
  return clipService.findOne({
    _id: $stateParams.id
  });
}
