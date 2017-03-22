
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
  .config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    //Modify the tabs of android display position! start
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');
    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');
    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
  })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {

      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider


    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
//诗
  .state('tab.shi', {
    url: '/shi',
    views: {
      'tab-shi': {
        templateUrl: 'templates/tab-shi.html',
        controller: 'ShiCtrl'
      }
    }
  })
    .state('tab.shi-content', {
      url: '/shi-content/:id',
      cache:"false",
      views: {
        'tab-shi': {
          templateUrl: 'templates/tab-shi-content.html',
          controller: 'ShiCtrl'
        }
      }
    })
//词
  .state('tab.ci', {
      url: '/ci',
      views: {
        'tab-ci': {
          templateUrl: 'templates/tab-ci.html',
          controller: 'CiCtrl'
        }
      }
   })
    .state('tab.ci-content', {
      url: '/ci-content/:id',
      cache:"false",
      views: {
        'tab-ci': {
          templateUrl: 'templates/tab-ci-content.html',
          controller: 'CiConCtrl'
        }
      }
    })
//文
  .state('tab.wen', {
    url: '/wen',
    views: {
      'tab-wen': {
        templateUrl: 'templates/tab-wen.html',
        controller: 'WenCtrl'
      }
    }
  })
    .state('tab.wen-content', {
      url: '/wen-content/:id',
      cache:"false",
      views: {
        'tab-wen': {
          templateUrl: 'templates/tab-wen-content.html',
          controller: 'WenConCtrl'
        }
      }
    })
//我
  .state('tab.my', {
    url: '/my',
    views: {
      'tab-my': {
        templateUrl: 'templates/tab-my.html',
        controller: 'MyCtrl'
      }
    }
  })
  ;


  $urlRouterProvider.otherwise('/tab/shi');

});
