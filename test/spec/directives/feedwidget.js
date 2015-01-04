'use strict';

describe('Directive: feedWidget', function () {

  // load the directive's module
  beforeEach(module('homepageApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<feed-widget></feed-widget>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the feedWidget directive');
  }));
});
