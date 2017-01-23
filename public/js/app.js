angular.module('hoBook', ['ngRoute', 'ngSanitize', 'ngAnimate']).config(config);

function config($httpProvider, $routeProvider){

  $routeProvider
    .when('/login',{
      templateUrl : 'angular-app/login/login.html'
    })
    .when('/register',{
      templateUrl : 'angular-app/register/register.html'
    })
    .when('/hotels', {
      templateUrl: 'angular-app/hotel/hotelList/hotelList.html',
      controller : hotelListController,
      controllerAs : 'hl'
    })
    .when('/hotels/:hotelId', {
      templateUrl : 'angular-app/hotel/hotelDetails/hotelDetails.html',
      controller: hotelDetailController,
      controllerAs : 'hd'
    })
    .otherwise({
      redirectTo   :'/hotels'
    });
};
