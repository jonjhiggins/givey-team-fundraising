'use strict';

/**
 * @ngdoc function
 * @name giveyTeamFundraisingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the giveyTeamFundraisingApp
 */
angular
  .module('giveyTeamFundraisingApp')
  .controller('MainCtrl', function (memberService) {

    this.meaningOfLife = memberService.meaningOfLife;

    // Need to move out of controller
    this.team = {
        teamName: 'Your Givey Team',
        teamDescription: 'Lorem ipsum',
        teamCta: {
            text: 'Donate',
            href: 'http://givey.com'
        },
        progressTitle: 'So far we\'ve raised',
        progressTotal: '£1000',
        progressPercentage: '50%',
        membersTitle: 'Our team',
        members: memberService.members
    };
  });

