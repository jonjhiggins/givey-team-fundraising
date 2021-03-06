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
    'ngRoute',
    'angular-inview'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        title: 'Home'
      })
      .otherwise({
        redirectTo: '/'
      });
  });