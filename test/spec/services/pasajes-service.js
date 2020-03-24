'use strict';

describe('Service: pasajesService', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var pasajesService;
  beforeEach(inject(function (_pasajesService_) {
    pasajesService = _pasajesService_;
  }));

  it('should do something', function () {
    expect(!!pasajesService).toBe(true);
  });

});
