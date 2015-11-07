'use strict';

describe('Controller: AdulteCtrl', function () {

  // load the controller's module
  beforeEach(module('showcaseApp'));

  var AdulteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdulteCtrl = $controller('AdulteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
//    expect(AdulteCtrl.awesomeThings.length).toBe(3);
  });
});
