'use strict';

describe('Controller: ReaderCtrl', function () {

  // load the controller's module
  beforeEach(module('homepageApp'));

  var ReaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReaderCtrl = $controller('ReaderCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
