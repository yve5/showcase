'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('HomeCtrl', ['$scope', '$location', '$anchorScroll', 'common', function ($scope, $location, $anchorScroll, common) {
      common.setSection('home');
      
      $scope.gotoTop = function() {
        $location.hash('top');
        $anchorScroll();
      };
  }]);
