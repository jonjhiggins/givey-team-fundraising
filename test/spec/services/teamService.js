'use strict';

describe('Service: teamService', function () {

  // load the service's module
  beforeEach(module('giveyTeamFundraisingApp'));

  // instantiate service
  var teamService;
  beforeEach(inject(function (_teamService_) {
    teamService = _teamService_;
  }));

  it('should get team info', function () {
    expect(teamService.team.teamName).toBe('Your Givey Team');
    expect(teamService.team.teamCta.text).toBe('Donate');
    expect(teamService.team.teamCta.href).toBe('http://givey.com');
    expect(teamService.team.progressTitle).toBe('So far we\'ve raised');
    expect(teamService.team.progressTotal).toBe('£1000');
    expect(teamService.team.progressPercentage).toBe('50%');
    expect(teamService.team.membersTitle).toBe('Our team');
  });

});
