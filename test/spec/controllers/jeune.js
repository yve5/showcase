'use strict';

describe('Controller: JeuneCtrl', function () {

  // load the controller's module
  beforeEach(module('showcaseApp'));

  var JeuneCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JeuneCtrl = $controller('JeuneCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
//    expect(JeuneCtrl.awesomeThings.length).toBe(3);
  });
});
