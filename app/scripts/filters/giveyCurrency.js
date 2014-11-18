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
      return '£' + (Math.round((input * 100) / 100) / 100).toFixed(2);
    };
  });
