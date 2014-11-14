'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('giveyTeamFundraisingApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach team info to the scope', function () {
    expect(MainCtrl.team.teamName).toBe('Your Givey Team');
    expect(MainCtrl.team.teamCta.text).toBe('Donate');
    expect(MainCtrl.team.teamCta.href).toBe('http://givey.com');
    expect(MainCtrl.team.progressTitle).toBe('So far we\'ve raised');
    expect(MainCtrl.team.progressTotal).toBe('£1000');
    expect(MainCtrl.team.progressPercentage).toBe('50%');
    expect(MainCtrl.team.membersTitle).toBe('Our team');
  });

  it('should attach a list of team members to the scope', function () {
    expect(MainCtrl.teamMembers.length).toBe(2);
    expect(MainCtrl.teamMembers[0].name).toBe('Jon');
  });
});
