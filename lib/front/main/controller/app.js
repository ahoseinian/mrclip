'use strict';

AppController.$inject = ['clipService'];

function AppController(clipService) {
  var vm = this;
  vm.clips = clipService.items;
}
module.exports = AppController;
