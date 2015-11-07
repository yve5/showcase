'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:EvenementCtrl
 * @description
 * # EvenementCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('EvenementCtrl', ['common', function (common) {
      common.setSection('event');
  }]);
  