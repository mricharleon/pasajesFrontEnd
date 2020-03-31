'use strict';

describe('Controller: LogoutControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var LogoutControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogoutControllerCtrl = $controller('LogoutControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LogoutControllerCtrl.awesomeThings.length).toBe(3);
  });
});
