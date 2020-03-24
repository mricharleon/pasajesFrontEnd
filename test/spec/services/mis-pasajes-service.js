'use strict';

describe('Service: misPasajesService', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var misPasajesService;
  beforeEach(inject(function (_misPasajesService_) {
    misPasajesService = _misPasajesService_;
  }));

  it('should do something', function () {
    expect(!!misPasajesService).toBe(true);
  });

});
