'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('footerCtrl', ['$anchorScroll', '$location', '$scope', function ($anchorScroll, $location, $scope) {
    var myDate = new Date();
    var currentYear = myDate.getFullYear();
    $scope.myYear = currentYear;
    
    $scope.gotoTop = function() {
      $location.hash('top');
      $anchorScroll();
    };
  }]);
