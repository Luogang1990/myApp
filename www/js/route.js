angular.module('route', [
  'guidepage.route',
  'tabs.route',
  'home.route',
  'likes.route',
  'carts.route',
  'account.route',
])
  .config(function ($stateProvider, $urlRouterProvider) {

    // 当没有匹配到合适的路由之后默然跳转的url地址，还有就是项目默认启动的url地址
  /*  if (localStorage["isFirst"]) {
      $urlRouterProvider.otherwise('/tabs/home');
    }
    else {
      $urlRouterProvider.otherwise('/guidepage');
    }*/
    $urlRouterProvider.otherwise('/guidepage');
  });
