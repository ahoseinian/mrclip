'use strict';

SidebarController.$inject = ['clipService'];

function SidebarController(clipService) {
  var vm = this;
  clipService.query().then(function (res) {
    vm.clips = res;
  });
}

module.exports = SidebarController;
