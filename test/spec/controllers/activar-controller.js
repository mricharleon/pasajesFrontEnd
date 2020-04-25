'use strict';

describe('Controller: ActivarControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var ActivarControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActivarControllerCtrl = $controller('ActivarControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ActivarControllerCtrl.awesomeThings.length).toBe(3);
  });
});
