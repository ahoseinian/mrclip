'use strict';

SidebarController.$inject = ['clipService'];

function SidebarController(clipService) {
  var vm = this;
  vm.clips = clipService.items;
}

module.exports = SidebarController;
