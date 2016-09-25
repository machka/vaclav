var app = angular.module('vaclav-app', ['ngRoute']);

app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          })
        //   .when('/servis',{
        //         templateUrl: 'pages/servis.html'
        //   });
});