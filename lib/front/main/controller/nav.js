'use strict';
NavController.$inject = ['$timeout', 'clipService'];

function NavController($timeout, clipService) {
  var vm = this;
  vm.search = search;
  vm.choose = choose;
  vm.searching = false;

  function search(query) {
    vm.searching = !!query;
    var tempQuery = query;
    $timeout(function () {
      if (tempQuery == vm.query) {
        clipService.search(query).success(function (res) {
          vm.clips = res;
        });
      }
    }, 500);
  }

  function choose(name) {
    vm.query = name;
    vm.searching = false;
  }
}

module.exports = NavController;
