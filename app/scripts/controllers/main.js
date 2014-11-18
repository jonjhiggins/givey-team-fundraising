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
                      return team.giveyBusiness;
                    });
          },
          loadTeamMembers = function(giveyBusiness) {
            return TeamMemberService
                    .requestTeamMembers(giveyBusiness)
                    .then(function(teamMembers) {
                      vm.teamMembers = teamMembers;
                    });
          };

      loadTeam()
        .then(loadTeamMembers);

  };

  angular
    .module('giveyTeamFundraisingApp')
    .controller('MainCtrl', MainCtrl);

})();

