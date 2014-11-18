'use strict';

describe('Filter: giveyCurrency', function () {

  // load the filter's module
  beforeEach(module('giveyTeamFundraisingApp'));

  // initialize a new instance of the filter before each test
  var giveyCurrency;
  beforeEach(inject(function ($filter) {
    giveyCurrency = $filter('giveyCurrency');
  }));

  it('should return currency formatted properly"', function () {
    expect(giveyCurrency(90210)).toBe('£902.10');
  });

});
