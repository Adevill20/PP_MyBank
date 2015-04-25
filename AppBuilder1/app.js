/*(function() {

    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app = {
        models: {},
        data: {}
    };

    if (window.cordova) {
        // this function is called by Cordova when the application is loaded by the device
        document.addEventListener('deviceready', function() {

            // hide the splash screen as soon as the app is ready. otherwise
            // Cordova will wait 5 very long seconds to do it for you.
            if (navigator && navigator.splashscreen) navigator.splashscreen.hide();

        }, false);
    } else {
   
	}

    window.app = app;
}());*/

var app = angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$ionicConfigProvider.views.maxCache(0);
	$ionicConfigProvider.views.transition("ios");
	$ionicConfigProvider.backButton.icon("ion-chevron-left");
	$ionicConfigProvider.tabs.style("standard");
	$ionicConfigProvider.navBar.alignTitle("center");
	$ionicConfigProvider.tabs.position("bottom");
	$ionicConfigProvider.navBar.positionPrimaryButtons("left");
	
  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "templates/facts.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    });
	
   $urlRouterProvider.otherwise("/tab/home");
})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});