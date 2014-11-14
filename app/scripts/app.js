'use strict';

/**
 * @ngdoc overview
 * @name giveyTeamFundraisingApp
 * @description
 * # giveyTeamFundraisingApp
 *
 * Main module of the application.
 */
angular
  .module('giveyTeamFundraisingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  angular.module('giveyTeamFundraisingApp').run(function($rootScope) {
    $rootScope.site = {
      name: 'Givey Team Fundraising',
      teamName: 'Team Name'
    };
  });