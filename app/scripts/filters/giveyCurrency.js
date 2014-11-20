'use strict';

/**
 * @ngdoc filter
 * @name giveyTeamFundraisingApp.filter:giveyCurrency
 * @function
 * @description
 * # giveyCurrency
 * Filter in the giveyTeamFundraisingApp.
 */

function giveyCurrencyFilter($filter) {
	return function (input) {
      var amount = (Math.round((input * 100) / 100) / 100);
      return $filter('currency')(amount, '£').slice(0, -3);
    };
}

angular.module('giveyTeamFundraisingApp')
  .filter('giveyCurrency', ['$filter', giveyCurrencyFilter]);
