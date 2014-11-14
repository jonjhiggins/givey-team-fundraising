(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name giveyTeamFundraisingApp.teamService
   * @description
   * # teamService
   * Factory in the giveyTeamFundraisingApp.
   */

  function teamService() {
      /*jshint shadow:true*/
      var teamService = {};

      teamService.team = {
        teamName: 'Your Givey Team',
        teamDescription: 'Lorem ipsum',
        teamCta: {
            text: 'Donate',
            href: 'http://givey.com'
        },
        progressTitle: 'So far we\'ve raised',
        progressTotal: '£1000',
        progressPercentage: '50%',
        membersTitle: 'Our team'
      };

      return teamService;
  }

  angular
    .module('giveyTeamFundraisingApp')
    .factory('teamService', teamService);
})();