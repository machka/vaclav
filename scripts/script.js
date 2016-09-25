var app = angular.module('vaclav-app', ['ngRoute']);

app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'pages/onas.html'
          })
          .when('/onas',{
                templateUrl: 'pages/onas.html'
          })
          .when('/servis',{
                templateUrl: 'pages/servis.html'
          })
          .when('/bazar',{
                templateUrl: 'pages/bazar.html'
          })
          .when('/kontakt',{
                templateUrl: 'pages/kontakt.html'
          });
});

$( document ).ready(function() {
      $("ul.nav-pills a").on('click', function(){
          $("ul.nav-pills li").each(function(){
                $(this).removeClass('active');
          })

          $(this).parent().addClass('active');
      })
});