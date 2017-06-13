angular.module('guidepage.service', [])
  .factory('GuidePageFty', function() {
    var name = "英雄联盟LOL";
    return {
      getName:function () {
        return name;
      }
    };
  });
