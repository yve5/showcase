'use strict';

/**
 * @ngdoc directive
 * @name showcaseApp.directive:footer
 * @description
 * # footer
 */
angular.module('showcaseApp')
  .directive('footer', function () {
    return {
      templateUrl: 'views/footer.html',
      controller: 'footerCtrl',
      restrict: 'AEC'
    };
  });
