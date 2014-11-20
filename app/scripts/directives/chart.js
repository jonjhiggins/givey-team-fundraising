(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name giveyTeamFundraisingApp.directive:chart
   * @description
   * # chart
   */

  function chartDirective() {
    return {
        restrict: 'A',
        scope: {
          data: '=chartData',
          inViewStatus: '=inViewStatus',
          type: '@chartType'
        },
        link: link
      };
  }

  var chartObj,
      dataAvailable,
      inViewStatus;

  function link($scope, $elem) {
    var ctx = $elem[0].getContext( '2d' ),
      chart = new Chart( ctx );

    $scope.$watch(
      'data', function ( value ) {
        dataAvailable = value;
        renderChart($scope, $elem, chart);
      }
    );

    $scope.$watch(
      'inViewStatus', function( status ) {
        inViewStatus = status;
        renderChart($scope, $elem, chart);
      }
    );
  }

  function renderChart($scope, $elem, chart) {
    if (dataAvailable && inViewStatus) {
      if ( chartObj ) {
        chartObj.destroy();
      }
      chartObj = chart[ $scope.type ]( $scope.data, {
        responsive : true,
        tooltipTemplate: '<%if (label){%><%=label%><%}%>',
      } );
    }
  }

  angular.module('giveyTeamFundraisingApp')
    .directive('chart', chartDirective);
})();