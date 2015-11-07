'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:CompagnieCtrl
 * @description
 * # CompagnieCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('CompagnieCtrl', ['common', function (common) {
      common.setSection('company');
  }]);
