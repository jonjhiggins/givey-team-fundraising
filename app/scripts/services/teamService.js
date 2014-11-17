(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name giveyTeamFundraisingApp.TeamService
   * @description
   * # TeamService
   * Factory in the giveyTeamFundraisingApp.
   */

  function TeamService($http, $q) {
      /*jshint shadow:true*/

      var TeamService = {};

      TeamService.requestTeam = function() {
          var deferred = $q.defer(),
              url = '/data/team.json';

          $http.get(url)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function() {
                deferred.resolve([]);
            });

          return deferred.promise;
      };

      return TeamService;
  }

  angular
    .module('giveyTeamFundraisingApp')
    .factory('TeamService', ['$http', '$q', TeamService]);
})();