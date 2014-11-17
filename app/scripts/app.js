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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });