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
          deferred = $q.defer(),
          teamMembers = [],
          teamMembersTarget = 0;

      TeamMemberService.requestTeamMembers = function(team) {

        var Givey = new GiveyApp();

        teamMembersTarget = team.teamMembersTarget;

        Givey.find('business', team.giveyBusiness)
          .then(this.getTeamMembers);
        return deferred.promise;
      };

      TeamMemberService.getTeamMembers = function(business) {

        business.get('confirmedEmployees')
          .then(function (employees) {
            $.each(employees, TeamMemberService.processTeamMember);
          })
          .then(function() {
            deferred.resolve(teamMembers);
          });
      };

      TeamMemberService.processTeamMember = function(_, user) {

        var fullName = user.get('fullName'),
            giveyTag = user.get('giveyTag'),
            description = user.get('personalMessage'),
            image = user.get('avatarUrl'),
            imageThumb = image.replace('/upload/', '/upload/w_300,c_limit/'), // Resize large images
            totalRaw = user.get('voiceTotal'),
            total = $filter('giveyCurrency')(totalRaw, '£'),
            percentage = (totalRaw / teamMembersTarget).toFixed(0) + '%',
            ctaHref = 'https://www.givey.com/' + giveyTag; // TODO: doesn't link to fundraiding page

        teamMembers.push({
          fullName: fullName,
          description: description,
          image: image,
          imageThumb: imageThumb,
          total: total,
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
