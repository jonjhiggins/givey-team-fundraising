(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name giveyTeamFundraisingApp.TeamService
   * @description
   * # TeamService
   * Factory in the giveyTeamFundraisingApp.
   */

  function TeamService() {
      /*jshint shadow:true*/
      var TeamService = {};

      TeamService.team = {
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

      return TeamService;
  }

  angular
    .module('giveyTeamFundraisingApp')
    .factory('TeamService', TeamService);
})();