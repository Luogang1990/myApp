angular.module('guidepage.route', ['guidepage.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('guidepage', {
        url: '/guidepage',
        templateUrl: 'areas/guidepage/guidepage.html',
        controller: 'GuidePageCtrl'
      })
  });
