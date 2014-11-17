(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name giveyTeamFundraisingApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the giveyTeamFundraisingApp
   */

  var MainCtrl = function($scope, $rootScope, TeamService, TeamMemberService) {

      var vm = this;

      TeamService.requestTeam().then(function(team){
        vm.team = team;
        $rootScope.siteName = team.teamName;
      });

      TeamMemberService.requestTeamMembers().then(function(teamMembers){
        vm.teamMembers = teamMembers;
      });

  };

  angular
    .module('giveyTeamFundraisingApp')
    .controller('MainCtrl', MainCtrl);

})();

