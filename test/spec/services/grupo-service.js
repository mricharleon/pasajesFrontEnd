'use strict';

describe('Service: grupoService', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var grupoService;
  beforeEach(inject(function (_grupoService_) {
    grupoService = _grupoService_;
  }));

  it('should do something', function () {
    expect(!!grupoService).toBe(true);
  });

});
