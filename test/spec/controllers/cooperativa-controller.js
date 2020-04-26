'use strict';

describe('Controller: CooperativaControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var CooperativaControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CooperativaControllerCtrl = $controller('CooperativaControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CooperativaControllerCtrl.awesomeThings.length).toBe(3);
  });
});
