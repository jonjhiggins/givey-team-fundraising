(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name giveyTeamFundraisingApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the giveyTeamFundraisingApp
   */
  angular
    .module('giveyTeamFundraisingApp')
    .controller('MainCtrl', function (teamService, teamMemberService) {

      this.team = teamService.team;

      this.teamMembers = teamMemberService.teamMembers;

  });
})();

