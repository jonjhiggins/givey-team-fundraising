'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('giveyTeamFundraisingApp'));

  var vm, $scope;

  var testData = {
    TeamService: {
      'teamName': 'Your Givey Team',
      'teamDescription': 'Lorem ipsum',
      'teamCta': {
          'text': 'Donate',
          'href': 'http://givey.com'
      },
      'progressTitle': 'So far we\'ve raised',
      'progressTotal': '£1000',
      'progressPercentage': '50%',
      'membersTitle': 'Our team'
    },
    TeamMemberService: [
      {
          'name': 'Jon',
          'image': 'http://www.gravatar.com/avatar/acbc94c39c3c0eeaa7b9a6cb4540a2b5?s=96&d=identicon',
          'description': 'Lorem ipsum',
          'percentage': '30%',
          'total': '£50',
          'cta': {
              'href': 'http://givey.com'
          }
      }
    ]
  };

  beforeEach(inject(function($controller, $rootScope, $q, TeamService, TeamMemberService) {

    $scope = $rootScope.$new();

    spyOn(TeamService, 'requestTeam').and.callFake(function() {
      var deferred = $q.defer();
      deferred.resolve(testData.TeamService);
      return deferred.promise;
    });

    spyOn(TeamMemberService, 'requestTeamMembers').and.callFake(function() {
        var deferred = $q.defer();
        deferred.resolve(testData.TeamMemberService);
        return deferred.promise;
      });

    vm = $controller('MainCtrl', { $scope: $scope, TeamService: TeamService, TeamMemberService: TeamMemberService });
  }));

  // call to TeamService
  describe('call to TeamService', function() {

    it('should attach team info to the scope', function () {
      $scope.$apply();
      expect(vm.team).toEqual(testData.TeamService);
    });

  });

  // call to TeamMemberService
  describe('call to TeamMemberService', function() {

    it('should attach a list of team members to the scope', function () {
      $scope.$apply();
      expect(vm.teamMembers.length).toBe(1);
      expect(vm.teamMembers[0]).toEqual(testData.TeamMemberService[0]);
    });

  });


});
