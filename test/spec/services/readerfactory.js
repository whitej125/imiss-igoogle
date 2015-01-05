'use strict';

describe('Service: readerFactory', function () {

  // load the service's module
  beforeEach(module('homepageApp'));

  // instantiate service
  var readerFactory;
  beforeEach(inject(function (_readerFactory_) {
    readerFactory = _readerFactory_;
  }));

  it('should do something', function () {
    expect(!!readerFactory).toBe(true);
  });

});
