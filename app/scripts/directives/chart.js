'use strict';

/**
 * @ngdoc directive
 * @name giveyTeamFundraisingApp.directive:chart
 * @description
 * # chart
 */

function chartDirective() {
  return {
      template: '<div>!!!</div>',
      restrict: 'A',
      scope: {
        data: '=chartData',
        options: '=chartOptions',
        type: '@chartType',
        legend: '=chartLegend',
        chart: '=chart'
      },
      link: function postLink($scope, $elem) {

        var ctx = $elem[0].getContext( '2d' ),
            chart = new Chart( ctx ),
            chartObj,
            parentWidth = $elem.parent().prop('offsetWidth');

        $elem.css({
          'width': parentWidth,
          'height': 'auto'
        });

        $scope.$watch(
          'data',
          function ( value ) {
            if ( chartObj ) {
              chartObj.destroy();
            }
            if ( value ) {
              chartObj = chart[ $scope.type ]( $scope.data, $scope.options );
            }
          }
        );
      }
    };
}

angular.module('giveyTeamFundraisingApp')
  .directive('chart', chartDirective);
