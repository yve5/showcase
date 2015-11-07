'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('headerCtrl', ['$scope', 'common', function ($scope, common) {
    $scope.enableLink = function(name) {
      return (name === common.getSection());
    };
  }]);
