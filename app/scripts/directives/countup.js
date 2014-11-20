(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name giveyTeamFundraisingApp.directive:countUp
   * @description
   * # countUp
   */

  var countUpDirective = function() {

    var postLink = function($scope, $elem) {

      var totalAvailable,
          inViewStatus,
          id = 'count-up' + Math.floor((Math.random()*9999));

      $elem.prop('id', id);

      $scope.$watch(
        'total', function ( value ) {
          totalAvailable = value;
          renderCountUp();
        }
      );

      $scope.$watch(
        'inViewStatus', function( status ) {
          inViewStatus = status;
          renderCountUp();
        }
      );

      var renderCountUp = function() {
        if ( totalAvailable && inViewStatus ) {
          var numAnim = new countUp(id, 0, (totalAvailable / 100), 0, 1.5);
          $elem.addClass('count-up--currency');
          numAnim.start();
          totalAvailable = false;
        }
      };
    };

    return {
      restrict: 'A',
      scope: {
        total: '=total',
        inViewStatus: '=inViewStatus'
      },
      link: postLink
    };
  };



  angular.module('giveyTeamFundraisingApp')
    .directive('countUp', countUpDirective);
})();
