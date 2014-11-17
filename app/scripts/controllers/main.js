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

      this.team = TeamService.team;

      TeamMemberService.requestTeamMembers().success(function(data){
        vm.teamMembers = data;
        //self.teamMembers = TeamMemberService.teamMembersList;
      });

  };
  angular
    .module('giveyTeamFundraisingApp')
    .controller('MainCtrl', MainCtrl);
})();

