'use strict';

describe('Service: memberService', function () {

  // load the service's module
  beforeEach(module('giveyTeamFundraisingApp'));

  var $scope,
      TeamMemberService;

  beforeEach(inject(function ($rootScope, $q, _TeamMemberService_) {

    $scope = $rootScope.$new();
    TeamMemberService = _TeamMemberService_;

    var testData = [
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
    ];

    spyOn(TeamMemberService, 'requestTeamMembers').and.callFake(function() {
        var deferred = $q.defer();
        deferred.resolve(testData);
        return deferred.promise;
    });
  }));

  it('should get team member info', function() {

    TeamMemberService.requestTeamMembers()
      .then(function(teamMembers){
        expect(teamMembers.length).toBe(2);
        expect(teamMembers[0].name).toBe('Jon');
        expect(teamMembers[0].image).toBe('http://www.gravatar.com/avatar/acbc94c39c3c0eeaa7b9a6cb4540a2b5?s=96&d=identicon');
        expect(teamMembers[0].description).toBe('Lorem ipsum');
        expect(teamMembers[0].percentage).toBe('30%');
        expect(teamMembers[0].total).toBe('£50');
        expect(teamMembers[0].cta.href).toBe('http://givey.com');
      }
    );
    $scope.$apply();

  });

});
