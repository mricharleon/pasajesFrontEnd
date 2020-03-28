'use strict';

describe('Service: unidadService', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var unidadService;
  beforeEach(inject(function (_unidadService_) {
    unidadService = _unidadService_;
  }));

  it('should do something', function () {
    expect(!!unidadService).toBe(true);
  });

});
