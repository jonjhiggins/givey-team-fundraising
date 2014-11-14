'use strict';

describe('Service: memberService', function () {

  // load the service's module
  beforeEach(module('giveyTeamFundraisingApp'));

  // instantiate service
  var memberService;
  beforeEach(inject(function (_memberService_) {
    memberService = _memberService_;
  }));

  it('should do something', function () {
    expect(!!memberService).toBe(true);
  });

});
