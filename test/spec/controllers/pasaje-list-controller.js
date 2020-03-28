'use strict';

describe('Controller: PasajeListControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var PasajeListControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PasajeListControllerCtrl = $controller('PasajeListControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PasajeListControllerCtrl.awesomeThings.length).toBe(3);
  });
});
