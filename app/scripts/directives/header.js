'use strict';

/**
 * @ngdoc directive
 * @name showcaseApp.directive:header
 * @description
 * # header
 */
angular.module('showcaseApp')
  .directive('header', function () {
    return {
      templateUrl: 'views/header.html',
      controller: 'headerCtrl',
      restrict: 'AEC'
    };
  });
