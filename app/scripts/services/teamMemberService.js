(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name giveyTeamFundraisingApp.TeamMemberService
   * @description
   * # TeamMemberService
   * Factory in the giveyTeamFundraisingApp.
   */

  function TeamMemberService($http) {
      /*jshint shadow:true*/

      return {
        requestTeamMembers: function() {
            var url = '/data/teamMembers.json';

            return $http.get(url);
        }
      };

  }

  angular
    .module('giveyTeamFundraisingApp')
    .factory('TeamMemberService', ['$http', TeamMemberService]);
})();
