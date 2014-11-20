(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name giveyTeamFundraisingApp.TeamService
   * @description
   * # TeamService
   * Factory in the giveyTeamFundraisingApp.
   */

  function TeamService($http, $q, $filter, $location) {
      /*jshint shadow:true*/

      var TeamService = {},
          TeamServiceDefaults = {
            'giveyBusiness': 'neteffekt',
            'teamName': 'A Givey Team',
            'teamDescription': 'Raising funds for a charity',
            'teamCta': {
                'text': 'Donate'
            },
            'teamTarget': 1000000,
            'background': '/images/team-background.jpg',
            'chartColor': '#F7464A',
            'progressTitle': 'So far we\'ve raised...',
            'teamMembersTitle': 'Our team',
            'teamMembersTarget': 150000
          };

      // Get team info from JSON file
      TeamService.requestTeam = function() {
          var deferred = $q.defer(),
              team,
              parameters = {
                giveyBusiness: $location.search().giveyBusiness,
                teamName: $location.search().teamName,
              };

          team = TeamServiceDefaults;

          // If URL parameters exist for values, override with them
          team.giveyBusiness = parameters.giveyBusiness ? parameters.giveyBusiness : team.giveyBusiness;
          team.teamName = parameters.teamName ? parameters.teamName : team.teamName;
          team.teamCta.href = 'https://givey.com/' + team.giveyBusiness;
          team.teamTargetFormatted = $filter('giveyCurrency')(team.teamTarget, '£');
          deferred.resolve(team);

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
        var teamPercentage = Math.round((teamTotal / teamTarget * 100), 2),
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
    .factory('TeamService', ['$http', '$q', '$filter', '$location', TeamService]);
})();