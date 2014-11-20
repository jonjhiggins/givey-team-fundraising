'use strict';

describe('Service: TeamService', function () {

  // load the service's module
  beforeEach(module('giveyTeamFundraisingApp'));

  var $scope,
      TeamService;

  beforeEach(inject(function ($rootScope, _TeamService_) {
    $scope = $rootScope.$new();
    TeamService = _TeamService_;
  }));

  describe('Method: requestTeam', function () {

    beforeEach(inject(function ($q) {

      var testData = {
        'teamName': 'Your Givey Team',
        'teamCta': {
            'text': 'Donate'
        }
      };

      spyOn(TeamService, 'requestTeam').and.callFake(function() {
          var deferred = $q.defer();
          deferred.resolve(testData);
          return deferred.promise;
      });

    }));

    it('should get team info', function () {
      TeamService
        .requestTeam()
        .then(function(team){
          expect(team.teamName).toBe('Your Givey Team');
          expect(team.teamCta.text).toBe('Donate');
        }
      );
      $scope.$apply();
    });

  });

  describe('Method: getTeamPercentage', function () {
    it('should calculate team percentage', function() {
        TeamService
          .getTeamPercentage(14300, 15000)
          .then(function(percentages) {
            expect(percentages.teamPercentage).toBe(95);
            expect(percentages.teamPercentageFormatted).toBe('95%');
          });
        $scope.$apply();
    });
  });



});
