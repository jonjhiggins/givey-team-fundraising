'use strict';

/**
 * @ngdoc function
 * @name giveyTeamFundraisingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the giveyTeamFundraisingApp
 */
angular.module('giveyTeamFundraisingApp')
  .controller('MainCtrl', function ($scope) {

    // Need to move out of controller
    $scope.team = {
        teamName: 'Your Givey Team',
        teamDescription: 'Lorem ipsum',
        teamCta: {
            text: 'Donate',
            href: 'http://givey.com'
        },
        progressTitle: 'So far we\'ve reaised',
        progressTotal: '£1000',
        progressPercentage: '50%',
        membersTitle: 'Our team',
        members: [
            {
                name: 'Jon',
                image: 'http://www.gravatar.com/avatar/acbc94c39c3c0eeaa7b9a6cb4540a2b5?s=96&d=identicon',
                description: 'Lorem ipsum',
                percentage: '30%',
                total: '£50',
                // Move text out of here?
                cta: {
                    text: 'Donate',
                    href: 'http://givey.com'
                },
            },
            {
                name: 'Jon',
                image: 'http://www.gravatar.com/avatar/acbc94c39c3c0eeaa7b9a6cb4540a2b5?s=96&d=identicon',
                description: 'Lorem ipsum',
                percentage: '30%',
                total: '£50',
                // Move text out of here?
                cta: {
                    text: 'Donate',
                    href: 'http://givey.com'
                },
            }
        ]
    };
  });

