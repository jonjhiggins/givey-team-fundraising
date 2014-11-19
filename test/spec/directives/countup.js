'use strict';

describe('Directive: countUp', function () {

  // load the directive's module
  beforeEach(module('giveyTeamFundraisingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<count-up></count-up>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the countUp directive');
  }));
});
