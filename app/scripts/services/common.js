'use strict';

/**
 * @ngdoc service
 * @name showcaseApp.common
 * @description
 * # common
 * Factory in the showcaseApp.
 */
angular.module('showcaseApp')
  .factory('common', function () {
    var section = 'home';

    return {
      setSection: function (foo) {
        section = foo;
      },
      getSection: function () {
        return section;
      }
    };
  });
