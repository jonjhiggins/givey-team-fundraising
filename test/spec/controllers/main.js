'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('giveyTeamFundraisingApp'));

  var vm, $scope;

  describe('should attach a list of team members to the scope', function() {

    beforeEach(inject(function($controller, $rootScope, $q, TeamMemberService) {
      $scope = $rootScope.$new();

      spyOn(TeamMemberService, 'requestTeamMembers').and.callFake(function() {
        var deferred = $q.defer();
        deferred.resolve(
          [
            {
                'name': 'Jon',
                'image': 'http://www.gravatar.com/avatar/acbc94c39c3c0eeaa7b9a6cb4540a2b5?s=96&d=identicon',
                'description': 'Lorem ipsum',
                'percentage': '30%',
                'total': '£50',
                'cta': {
                    'href': 'http://givey.com'
                }
            },
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
        );
        return deferred.promise;
      });

      vm = $controller('MainCtrl', { $scope: $scope, TeamMemberService: TeamMemberService });
    }));

    it('should attach a list of team members to the scope', function () {
      $scope.$apply();
      expect(vm.teamMembers.length).toBe(2);
      expect(vm.teamMembers[0]).toEqual({
          'name': 'Jon',
          'image': 'http://www.gravatar.com/avatar/acbc94c39c3c0eeaa7b9a6cb4540a2b5?s=96&d=identicon',
          'description': 'Lorem ipsum',
          'percentage': '30%',
          'total': '£50',
          'cta': {
              'href': 'http://givey.com'
          }
      });
    });

  });

  
});

/*
xit('should attach team info to the scope', function () {
    expect(vm.team.teamName).toBe('Your Givey Team');
    expect(vm.team.teamCta.text).toBe('Donate');
    expect(vm.team.teamCta.href).toBe('http://givey.com');
    expect(vm.team.progressTitle).toBe('So far we\'ve raised');
    expect(vm.team.progressTotal).toBe('£1000');
    expect(vm.team.progressPercentage).toBe('50%');
    expect(vm.team.membersTitle).toBe('Our team');
  });

 */
