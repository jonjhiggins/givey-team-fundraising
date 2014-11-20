(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name giveyTeamFundraisingApp.TeamMemberService
   * @description
   * # TeamMemberService
   * Factory in the giveyTeamFundraisingApp.
   */

  function TeamMemberService($http, $q, $filter) {
      /*jshint shadow:true*/

      var TeamMemberService = {},
          teamMembers = [],
          teamMembersTarget = 0;

      TeamMemberService.requestTeamMembers = function(team) {

        teamMembers = [];
        teamMembersTarget = team.teamMembersTarget;

        var Givey = new GiveyApp(),
            deferred = $q.defer(),
            loadBusiness = function(team) {
              return Givey
                      .find('business', team.giveyBusiness)
                      .then(function(business) {
                        return business.get('confirmedEmployees');
                      });
            },
            loadTeamMembers = function(employees) {
              return $.each(employees, TeamMemberService.processTeamMember);
            },
            resolve = function() {
              return deferred.resolve(teamMembers);
            };

        loadBusiness(team)
          .then(loadTeamMembers)
          .then(resolve);

        return deferred.promise;
      };

      TeamMemberService.processTeamMember = function(_, user) {

        var fullName = user.get('fullName'),
            giveyTag = user.get('giveyTag'),
            description = user.get('personalMessage'),
            image = user.get('avatarUrl'),
            imageThumb = image.replace('/upload/', '/upload/w_300,c_limit/'), // Resize large images
            total = user.get('voiceTotal'),
            totalFormatted = $filter('giveyCurrency')(total, '£'),
            percentage = (total / teamMembersTarget * 100).toFixed(0) + '%',
            ctaHref = 'https://www.givey.com/' + giveyTag; // TODO: doesn't link to fundraiding page

        teamMembers.push({
          fullName: fullName,
          description: description,
          image: image,
          imageThumb: imageThumb,
          total: total,
          totalFormatted: totalFormatted,
          percentage: percentage,
          cta: {
            href: ctaHref
          }
        });
      };


      return TeamMemberService;
  }

  angular
    .module('giveyTeamFundraisingApp')
    .factory('TeamMemberService', ['$http', '$q', '$filter', TeamMemberService]);
})();
