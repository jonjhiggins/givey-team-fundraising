(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name giveyTeamFundraisingApp.TeamService
   * @description
   * # TeamService
   * Factory in the giveyTeamFundraisingApp.
   */

  function TeamService($http, $q, $filter) {
      /*jshint shadow:true*/

      var TeamService = {};

      // Get team info from JSON file
      TeamService.requestTeam = function() {
          var deferred = $q.defer(),
              url = '/data/team.json';

          $http.get(url)
            .success(function(data) {
                data.teamCta.href = 'https://givey.com/' + data.giveyBusiness;
                deferred.resolve(data);
            })
            .error(function() {
                deferred.resolve([]);
            });

          return deferred.promise;
      };

      // Get team totals by adding up team member totals
      TeamService.getTeamTotal = function(teamMembers) {
        var teamTotal = 0,
            teamTotalFormatted = 0,
            deferred = $q.defer();

        angular.forEach(teamMembers, function(value) {
          teamTotal += value.total;
        }, teamTotal);

        teamTotalFormatted = $filter('giveyCurrency')(teamTotal, '£');
        deferred.resolve({teamTotal: teamTotal, teamTotalFormatted: teamTotalFormatted});

        return deferred.promise;
      };

      // Get team progress percentage from total raised vs target
      TeamService.getTeamPercentage = function(teamTotal, teamTarget) {
        var teamPercentage = Math.round((teamTotal / teamTarget * 10), 2),
            teamPercentageFormatted = teamPercentage + '%',
            deferred = $q.defer();

        deferred.resolve({
          teamPercentage: teamPercentage,
          teamPercentageFormatted: teamPercentageFormatted
        });

        return deferred.promise;
      };

      return TeamService;
  }

  angular
    .module('giveyTeamFundraisingApp')
    .factory('TeamService', ['$http', '$q', '$filter', TeamService]);
})();