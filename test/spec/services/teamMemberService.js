'use strict';

describe('Service: memberService', function () {

  // load the service's module
  beforeEach(module('giveyTeamFundraisingApp'));

  // instantiate service
  var teamMemberService;
  beforeEach(inject(function (_teamMemberService_) {
    teamMemberService = _teamMemberService_;
  }));

  it('should get team member info', function () {
    expect(teamMemberService.teamMembers.length).toBe(2);
    expect(teamMemberService.teamMembers[0].name).toBe('Jon');
    expect(teamMemberService.teamMembers[0].image).toBe('http://www.gravatar.com/avatar/acbc94c39c3c0eeaa7b9a6cb4540a2b5?s=96&d=identicon');
    expect(teamMemberService.teamMembers[0].description).toBe('Lorem ipsum');
    expect(teamMemberService.teamMembers[0].percentage).toBe('30%');
    expect(teamMemberService.teamMembers[0].total).toBe('£50');
    expect(teamMemberService.teamMembers[0].cta.href).toBe('http://givey.com');
  });

});
