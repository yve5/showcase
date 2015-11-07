'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:SaisonCtrl
 * @description
 * # SaisonCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('SaisonCtrl', ['common', function (common) {
      common.setSection('season');
  }]);
