(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name giveyTeamFundraisingApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the giveyTeamFundraisingApp
   */

  var MainCtrl = function($scope, $rootScope, $q, TeamService, TeamMemberService) {

      var vm = this,
          loadTeam = function() {
            return TeamService
                    .requestTeam()
                    .then(function(team) {
                      vm.team = team;
                      $rootScope.siteName = team.teamName;
                      return team;
                    });
          },
          loadTeamMembers = function(team) {
            return TeamMemberService
                    .requestTeamMembers(team)
                    .then(function(teamMembers) {
                      vm.teamMembers = teamMembers;
                      return teamMembers;
                    });
          },
          getTeamTotal = function(teamMembers) {
            return TeamService
                    .getTeamTotal(teamMembers)
                    .then(function(totals) {
                      vm.team.teamTotalFormatted = totals.teamTotalFormatted;
                      return totals.teamTotal;
                    });
          },
          getTeamPercentage = function(teamTotal) {
            return  TeamService
                      .getTeamPercentage(teamTotal, vm.team.teamTarget)
                      .then(function(teamPercentage) {
                        vm.team.teamPercentage = teamPercentage;
                        return teamPercentage;
                      })
                      .then(function(teamPercentage) {
                        var teamPercentageRaw = parseInt(teamPercentage.replace('%', ''));
                      });
          };

      loadTeam()
        .then(loadTeamMembers)
        .then(getTeamTotal)
        .then(getTeamPercentage);

  };

  angular
    .module('giveyTeamFundraisingApp')
    .controller('MainCtrl', MainCtrl);

})();

