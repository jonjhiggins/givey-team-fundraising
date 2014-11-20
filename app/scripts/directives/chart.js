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
          type: '@chartType'
        },
        link: function postLink($scope, $elem) {

          var ctx = $elem[0].getContext( '2d' ),
            chart = new Chart( ctx ),
            chartObj;

          $scope.$watch(
            'data',
            function ( value ) {
              if ( chartObj ) {
                chartObj.destroy();
              }
              if ( value ) {
                chartObj = chart[ $scope.type ]( $scope.data, { 
                  responsive : true,
                  tooltipTemplate: '<%if (label){%><%=label%><%}%>',
                } );
              }
            }
          );
        }
      };
  }

  angular.module('giveyTeamFundraisingApp')
    .directive('chart', chartDirective);
})();