/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('home.controller', ['home.service'])
  .controller('HomeCtrl', function ($scope, $state, HotFty, $http) {
    //这是tabs需要执行的操作
    getData();
    var movies = [];

    function getData() {
      window.doubanMovieCallback = function (data) {
        if (data.msg) {
          //返回错误信息
          // $scope.message = data.msg;
          console.log(data.msg);
        } else {
          console.log(data);
          $scope.hotmovies = data.subjects;
        }
      }

      $http.jsonp('https://api.douban.com/v2/movie/in_theaters?callback=doubanMovieCallback')
        .finally(function () {
          $scope.$broadcast('scroll.refreshComplete');
          $ionicLoading.hide();
        });
    }

    /**
     * 刷新页面
     */
    $scope.dorefresh = function () {
      getData();
    }

  })
