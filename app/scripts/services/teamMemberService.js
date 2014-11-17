(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name giveyTeamFundraisingApp.TeamMemberService
   * @description
   * # TeamMemberService
   * Factory in the giveyTeamFundraisingApp.
   */

  function TeamMemberService($http, $q) {
      /*jshint shadow:true*/

      var TeamMemberService = {
        requestTeamMembers: function() {
            var deferred = $q.defer(),
                url = '/data/teamMembers.json';

                console.log('here');

            $http.get(url)
              .success(function(data) {
                  deferred.resolve(data);
              })
              .error(function() {
                  deferred.resolve([]);
              });

            return deferred.promise;
        }
      };

      return TeamMemberService;

  }

  angular
    .module('giveyTeamFundraisingApp')
    .factory('TeamMemberService', ['$http', '$q', TeamMemberService]);
})();
