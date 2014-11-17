'use strict';

describe('Service: TeamService', function () {

  // load the service's module
  beforeEach(module('giveyTeamFundraisingApp'));

  var $scope,
      TeamService;

  beforeEach(inject(function ($rootScope, $q, _TeamService_) {

    $scope = $rootScope.$new();
    TeamService = _TeamService_;

    var testData = {
      'teamName': 'Your Givey Team',
      'teamDescription': 'Lorem ipsum',
      'teamCta': {
          'text': 'Donate',
          'href': 'http://givey.com'
      },
      'progressTitle': 'So far we\'ve raised',
      'progressTotal': '£1000',
      'progressPercentage': '50%',
      'membersTitle': 'Our tea'
    };

    spyOn(TeamService, 'requestTeam').and.callFake(function() {
        var deferred = $q.defer();
        deferred.resolve(testData);
        return deferred.promise;
    });

  }));

  it('should get team info', function () {

    TeamService.requestTeam()
      .then(function(team){
        expect(team.teamName).toBe('Your Givey Team');
        expect(team.teamCta.text).toBe('Donate');
        expect(team.teamCta.href).toBe('http://givey.com');
        expect(team.progressTitle).toBe('So far we\'ve raised');
        expect(team.progressTotal).toBe('£1000');
        expect(team.progressPercentage).toBe('50%');
        expect(team.membersTitle).toBe('Our team');
      }
    );
    $scope.$apply();

  });

});
