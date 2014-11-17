(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name giveyTeamFundraisingApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the giveyTeamFundraisingApp
   */

  var MainCtrl = function($scope, TeamService, TeamMemberService) {

      var vm = this;

      vm.team = TeamService.team;

      TeamMemberService.requestTeamMembers().then(function(teamMembers){
        vm.teamMembers = teamMembers;
      });

  };
  angular
    .module('giveyTeamFundraisingApp')
    .controller('MainCtrl', MainCtrl);
})();

