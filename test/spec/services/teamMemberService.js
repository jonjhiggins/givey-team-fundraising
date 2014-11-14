'use strict';

describe('Service: memberService', function () {

  // load the service's module
  beforeEach(module('giveyTeamFundraisingApp'));

  // instantiate service
  var TeamMemberService;
  beforeEach(inject(function (_TeamMemberService_) {
    TeamMemberService = _TeamMemberService_;
  }));

  xit('should get team member info', function () {
    expect(TeamMemberService.teamMembers.length).toBe(2);
    expect(TeamMemberService.teamMembers[0].name).toBe('Jon');
    expect(TeamMemberService.teamMembers[0].image).toBe('http://www.gravatar.com/avatar/acbc94c39c3c0eeaa7b9a6cb4540a2b5?s=96&d=identicon');
    expect(TeamMemberService.teamMembers[0].description).toBe('Lorem ipsum');
    expect(TeamMemberService.teamMembers[0].percentage).toBe('30%');
    expect(TeamMemberService.teamMembers[0].total).toBe('£50');
    expect(TeamMemberService.teamMembers[0].cta.href).toBe('http://givey.com');
  });

});
