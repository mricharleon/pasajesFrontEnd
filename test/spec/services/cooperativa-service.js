'use strict';

describe('Service: cooperativaService', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var cooperativaService;
  beforeEach(inject(function (_cooperativaService_) {
    cooperativaService = _cooperativaService_;
  }));

  it('should do something', function () {
    expect(!!cooperativaService).toBe(true);
  });

});
