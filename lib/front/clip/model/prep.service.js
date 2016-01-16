'use strict';

ClipPrepService.$inject = ['clipService'];

function ClipPrepService(clipService) {
  return clipService.query();
}

module.exports = ClipPrepService;
