'use strict';

describe('Controller: PasajeEditControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var PasajeEditControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PasajeEditControllerCtrl = $controller('PasajeEditControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PasajeEditControllerCtrl.awesomeThings.length).toBe(3);
  });
});
