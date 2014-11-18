'use strict';

/**
 * @ngdoc filter
 * @name giveyTeamFundraisingApp.filter:giveyCurrency
 * @function
 * @description
 * # giveyCurrency
 * Filter in the giveyTeamFundraisingApp.
 */
angular.module('giveyTeamFundraisingApp')
  .filter('giveyCurrency', function () {
    return function (input) {
      return 'giveyCurrency filter: ' + input;
    };
  });
