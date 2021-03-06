(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name giveyTeamFundraisingApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the giveyTeamFundraisingApp
   */

  var MainCtrl = function($scope, $rootScope, $q, $filter, TeamService, TeamMemberService) {

      var vm = this,
          handleError = function() {
            $('body').addClass('state--error');
            vm.error = 'Sorry, we are having trouble connecting to Givey';
          },
          loadTeam = function() {
            return TeamService
                    .requestTeam()
                    .then(function(team) {
                      vm.team = team;
                      vm.team.backgroundStyle = { 'background-image': 'url(' + team.background  + ')'};
                      $rootScope.siteName = team.teamName;
                      return team;
                    });
          },
          loadTeamMembers = function(team) {
            return TeamMemberService
                    .requestTeamMembers(team)
                    .then(
                      function(teamMembers) {
                        vm.teamMembers = teamMembers;
                        return teamMembers;
                      },
                    handleError);
          },
          getTeamTotal = function(teamMembers) {
            return TeamService
                    .getTeamTotal(teamMembers)
                    .then(function(totals) {
                      vm.team.teamTotal = totals.teamTotal;
                      vm.team.teamTotalFormatted = totals.teamTotalFormatted;
                      // TODO: move to service

                      var remaining = Math.max(vm.team.teamTarget - totals.teamTotal, 0);
                      vm.team.chart = [
                          { value : totals.teamTotal,
                            color : vm.team.chartColor,
                            label: totals.teamTotalFormatted + ' raised' },
                          { value : remaining,
                            color : '#EFEFEF',
                            label: $filter('giveyCurrency')(remaining, '£')  + ' to go'
                          }
                        ];
                      return totals.teamTotal;
                    });
          },
          getTeamPercentage = function(teamTotal) {
            return  TeamService
                      .getTeamPercentage(teamTotal, vm.team.teamTarget)
                      .then(function(percentages) {
                        vm.team.teamPercentage = percentages.teamPercentageFormatted;
                        return percentages;
                      });
          };

      loadTeam()
        .then(loadTeamMembers)
        .then(getTeamTotal)
        .then(getTeamPercentage);

      vm.inView = {
        setProperty: function(inview, prop) {
          this[prop] = inview;
        },
        animate: function(inview, event) {
          if (inview) {
            $(event.inViewTarget).removeClass('in-view').addClass('animated').addClass('fadeIn');
          }
        }
      };

  };

  angular
    .module('giveyTeamFundraisingApp')
    .controller('MainCtrl', [ '$scope', '$rootScope', '$q', '$filter', 'TeamService', 'TeamMemberService', MainCtrl ]);

})();

