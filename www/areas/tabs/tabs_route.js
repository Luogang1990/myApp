angular.module('tabs.route', ['tabs.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tabs', {
        url: '/tabs',
        templateUrl: 'areas/tabs/tabs.html',
        controller: 'TabsCtrl'
      })
  });
