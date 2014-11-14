(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name giveyTeamFundraisingApp.teamMemberService
   * @description
   * # teamMemberService
   * Factory in the giveyTeamFundraisingApp.
   */

  function teamMemberService() {
      /*jshint shadow:true*/
      var teamMemberService = {};

      teamMemberService.teamMembers = [
          {
              name: 'Jon',
              image: 'http://www.gravatar.com/avatar/acbc94c39c3c0eeaa7b9a6cb4540a2b5?s=96&d=identicon',
              description: 'Lorem ipsum',
              percentage: '30%',
              total: '£50',
              cta: {
                  href: 'http://givey.com'
              },
          },
          {
              name: 'Jon',
              image: 'http://www.gravatar.com/avatar/acbc94c39c3c0eeaa7b9a6cb4540a2b5?s=96&d=identicon',
              description: 'Lorem ipsum',
              percentage: '30%',
              total: '£50',
              cta: {
                  href: 'http://givey.com'
              },
          }
      ];

      return teamMemberService;
  }

  angular
    .module('giveyTeamFundraisingApp')
    .factory('teamMemberService', teamMemberService);
})();
