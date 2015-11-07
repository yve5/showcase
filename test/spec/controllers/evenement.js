'use strict';

describe('Controller: EvenementCtrl', function () {

  // load the controller's module
  beforeEach(module('showcaseApp'));

  var EvenementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EvenementCtrl = $controller('EvenementCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
//    expect(EvenementCtrl.awesomeThings.length).toBe(3);
  });
});
