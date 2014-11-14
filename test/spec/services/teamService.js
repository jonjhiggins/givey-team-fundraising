'use strict';

describe('Service: TeamService', function () {

  // load the service's module
  beforeEach(module('giveyTeamFundraisingApp'));

  // instantiate service
  var TeamService;
  beforeEach(inject(function (_TeamService_) {
    TeamService = _TeamService_;
  }));

  it('should get team info', function () {
    expect(TeamService.team.teamName).toBe('Your Givey Team');
    expect(TeamService.team.teamCta.text).toBe('Donate');
    expect(TeamService.team.teamCta.href).toBe('http://givey.com');
    expect(TeamService.team.progressTitle).toBe('So far we\'ve raised');
    expect(TeamService.team.progressTotal).toBe('£1000');
    expect(TeamService.team.progressPercentage).toBe('50%');
    expect(TeamService.team.membersTitle).toBe('Our team');
  });

});
