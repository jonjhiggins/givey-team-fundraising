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
          teamMembers = [];

      TeamMemberService.requestTeamMembers = function(giveyBusiness) {

        // Load Givey - move to separate service
        var Givey = new GiveyApp();

        Givey.find('business', giveyBusiness)
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
            total = $filter('giveyCurrency')(user.get('voiceTotal'), '£'),
            ctaHref = 'https://www.givey.com/' + giveyTag; // TODO: doesn't link to fundraiding page

        teamMembers.push({
          fullName: fullName,
          description: description,
          image: image,
          imageThumb: imageThumb,
          total: total,
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
