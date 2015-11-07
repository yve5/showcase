'use strict';

describe('Controller: CompagnieCtrl', function () {

  // load the controller's module
  beforeEach(module('showcaseApp'));

  var CompagnieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompagnieCtrl = $controller('CompagnieCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
//    expect(CompagnieCtrl.awesomeThings.length).toBe(3);
  });
});
