'use strict';

describe('Controller: SaisonCtrl', function () {

  // load the controller's module
  beforeEach(module('showcaseApp'));

  var SaisonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SaisonCtrl = $controller('SaisonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
//    expect(SaisonCtrl.awesomeThings.length).toBe(3);
  });
});
