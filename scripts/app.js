angular.module("todoListApp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');


  $stateProvider
        .state('home', {
        url: '/',
        templateUrl: '/',
        controller: 'mainCtrl'
      })

        .state('about', {
        url: '/about',
        templateUrl: 'templates/two.html'
        });
    })

