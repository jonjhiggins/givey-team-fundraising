'use strict';

/**
 * @ngdoc directive
 * @name giveyTeamFundraisingApp.directive:countUp
 * @description
 * # countUp
 */
angular.module('giveyTeamFundraisingApp')
  .directive('countUp', function () {
    return {
      restrict: 'A',
      scope: {
        total: '=total'
      },
      link: function postLink($scope, $elem) {

        var id = 'count-up' + Math.floor((Math.random()*9999));
        $elem.prop('id', id);

        $scope.$watch(
          'total',
          function ( value ) {
            if ( value ) {
              var numAnim = new countUp(id, 0, (value / 100), 0, 1.5);
              $elem.addClass('count-up--currency');
              numAnim.start();
            }
          }
        );
      }
    };
  });
