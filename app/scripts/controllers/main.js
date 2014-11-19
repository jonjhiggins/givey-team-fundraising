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
                      vm.team.backgroundStyle = { 'background-image': 'url(' + team.background  + ')'};
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
                      .then(function(percentages) {
                        vm.team.teamPercentage = percentages.teamPercentageFormatted;
                        return percentages;
                      })
                      .then(function(percentages) {
                        vm.team.chart = [
                          { value : percentages.teamPercentage, color : vm.team.chartColor },
                          { value : 100 - percentages.teamPercentage, color : '#EFEFEF' }
                        ];
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

