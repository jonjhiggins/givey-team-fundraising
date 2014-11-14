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

      // Define the TeamMemberService function
        var TeamMemberService = function() {

          var url = '/data/teamMembers.json',
              data = $http.get(url),
              self = this;

          this.teamMembersList = [];

          this.initialize = function() {
            data.then(function(response) {
              angular.extend(self.teamMembersList, response.data);
            });
          };

          this.initialize();
      };

      return (TeamMemberService);

  }

  angular
    .module('giveyTeamFundraisingApp')
    .factory('TeamMemberService', ['$http', TeamMemberService]);
})();
