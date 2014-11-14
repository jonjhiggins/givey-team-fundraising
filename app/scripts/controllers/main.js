(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name giveyTeamFundraisingApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the giveyTeamFundraisingApp
   */

  var MainCtrl = function(TeamService, TeamMemberService) {

      this.team = TeamService.team;

      this.teamMembers = new TeamMemberService();

  };
  angular
    .module('giveyTeamFundraisingApp')
    .controller('MainCtrl', MainCtrl);
})();

