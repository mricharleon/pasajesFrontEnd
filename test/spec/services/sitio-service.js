'use strict';

describe('Service: sitioService', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var sitioService;
  beforeEach(inject(function (_sitioService_) {
    sitioService = _sitioService_;
  }));

  it('should do something', function () {
    expect(!!sitioService).toBe(true);
  });

});
