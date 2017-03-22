angular.module('starter.controllers', [])

.controller('ShiCtrl', function($scope,shi) {
  $scope.showCon=function (id) {
    window.location='/#/tab/shi-content/'+id
    console.log(id)
  }
  $scope.data=shi.all()
  console.log($scope.data)
})
  .controller('ShiConCtrl', function($scope,$ionicActionSheet,$stateParams,shi) {
    $scope.data=shi.all()[$stateParams.id]
    console.log($scope.data)
    $scope.huotui=function () {
      window.location='/#/tab/shi'
    }

    $scope.shows=function () {


      var actsheet=$ionicActionSheet.show({
        titleText:"分享到",
        buttons:[
          {text:"<img src='../img/share_wechat.png' class='imgs'></img><img src='../img/share_wechatmoments.png' class='imgs'></img><img src='../img/share_qq.png' class='imgs'></img><img src='../img/share_qzone.png' class='imgs'></img><img src='../img/share_sinaweibo.png' class='imgs'></img>"},
          {text:"<img src='../img/share_wechatfavorite.png' class='imgs'></img><img src='../img/share_email.png' class='imgs'></img><img src='../img/share_tencentweibo.png' class='imgs'></img>"}

        ],
        buttonClicked:function(index){
          return true
        },
        cancelText:"取消",
      })
    }
  })
  /*底部tabs隐藏显示的指令*/
  .directive('hideTabs', function($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, element, attributes) {
        scope.$on('$ionicView.beforeEnter', function() {
          $rootScope.hideTabs=attributes.hideTabs;
        });

        scope.$on('$ionicView.beforeLeave', function() {
          $rootScope.hideTabs = false;
        });
      }
    };
  })

  .controller('CiCtrl', function($scope,ci) {

    $scope.showCon=function (id) {
      window.location='/#/tab/ci-content/'+id
      console.log(id)
    }
    $scope.data=ci.all()
    console.log($scope.data)



  })
.controller('CiConCtrl', function($scope,$ionicActionSheet,$stateParams,ci) {
  $scope.data=ci.all()[$stateParams.id]
  console.log($scope.data)
  $scope.huotui=function () {
    window.location='/#/tab/ci'
  }
  $scope.shows=function () {
    var actsheet=$ionicActionSheet.show({
      titleText:"分享到",
      buttons:[
        {text:"<img src='../img/share_wechat.png' class='imgs'></img><img src='../img/share_wechatmoments.png' class='imgs'></img><img src='../img/share_qq.png' class='imgs'></img><img src='../img/share_qzone.png' class='imgs'></img><img src='../img/share_sinaweibo.png' class='imgs'></img>"},
        {text:"<img src='../img/share_wechatfavorite.png' class='imgs'></img><img src='../img/share_email.png' class='imgs'></img><img src='../img/share_tencentweibo.png' class='imgs'></img>"}

      ],
      buttonClicked:function(index){
        return true
      },
      cancelText:"取消",
    })
  }
})
.controller('WenCtrl', function($scope,wen) {

 $scope.showCon=function (id) {
   window.location='/#/tab/wen-content/'+id
 }
$scope.data=wen.all()
})
  .controller('WenConCtrl', function($scope,$ionicActionSheet,$stateParams,wen) {
    $scope.data=wen.all()[$stateParams.id]
      $scope.huotui=function () {
        window.location='/#/tab/wen'
      }

    $scope.shows=function () {

      var actsheet=$ionicActionSheet.show({
        titleText:"分享到",
        buttons:[
          {text:"<img src='../img/share_wechat.png' class='imgs'></img><img src='../img/share_wechatmoments.png' class='imgs'></img><img src='../img/share_qq.png' class='imgs'></img><img src='../img/share_qzone.png' class='imgs'></img><img src='../img/share_sinaweibo.png' class='imgs'></img>"},
          {text:"<img src='../img/share_wechatfavorite.png' class='imgs'></img><img src='../img/share_email.png' class='imgs'></img><img src='../img/share_tencentweibo.png' class='imgs'></img>"}

        ],
        buttonClicked:function(index){
          return true
        },
        cancelText:"取消",
      })
    }
  })
.controller('MyCtrl', function($scope,$ionicActionSheet,$ionicModal) {

  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.show=function(){
    $scope.modal.show()
  };
  $scope.close = function () {
    $scope.modal.hide();
  }
  $scope.tj=function () {
    $scope.modal.hide();
  }


  $scope.shows=function () {
    var actsheet=$ionicActionSheet.show({
      titleText:"分享到",
      buttons:[
        {text:"<img src='../img/share_wechat.png' class='imgs'></img><img src='../img/share_wechatmoments.png' class='imgs'></img><img src='../img/share_qq.png' class='imgs'></img><img src='../img/share_qzone.png' class='imgs'></img><img src='../img/share_sinaweibo.png' class='imgs'></img>"},
        {text:"<img src='../img/share_wechatfavorite.png' class='imgs'></img><img src='../img/share_email.png' class='imgs'></img><img src='../img/share_tencentweibo.png' class='imgs'></img>"}

      ],
      buttonClicked:function(index){
        return true
      },
      cancelText:"取消",
    })
  }
})
 ;


