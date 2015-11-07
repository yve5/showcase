'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:CreationCtrl
 * @description
 * # CreationCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('CreationCtrl', ['common', function (common) {
      common.setSection('creation');
  }]);
