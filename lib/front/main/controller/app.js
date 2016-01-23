'use strict';

AppController.$inject = ['clipService'];

function AppController(clipService) {
  var vm = this;
  clipService.query(null, '-thumbs.up').then(function (res) {
    vm.clips = res;
  });
}
module.exports = AppController;
