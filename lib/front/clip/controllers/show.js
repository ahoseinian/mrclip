'use strict';
ShowController.$inject = ['$sce', 'clipService'];

function ShowController($sce, clipService) {
  var vm = this;
  vm.item = clipService.item;
  vm.config = {
    sources: [{
      src: $sce.trustAsResourceUrl(vm.item.address),
      type: 'video/mp4'
    }],
    plugins: {
      poster: vm.item.poster.eight
    }
  };
}

module.exports = ShowController;
