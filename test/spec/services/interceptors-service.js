'use strict';

describe('Service: interceptorsService', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var interceptorsService;
  beforeEach(inject(function (_interceptorsService_) {
    interceptorsService = _interceptorsService_;
  }));

  it('should do something', function () {
    expect(!!interceptorsService).toBe(true);
  });

});
