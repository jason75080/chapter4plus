angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('alohaResort', {
    url: '/home',
    templateUrl: 'templates/alohaResort.html',
    controller: 'alohaResortCtrl'
  })

  .state('reservation', {
    url: '/reservation',
    templateUrl: 'templates/reservation.html',
    controller: 'reservationCtrl'
  })

  .state('currentWeather', {
    url: '/weather',
	params: {
		cityid: ""		
},
    templateUrl: 'templates/currentWeather.html',
    controller: 'currentWeatherCtrl'
  })

  .state('localRestaurants', {
    url: '/restaurants',
    templateUrl: 'templates/localRestaurants.html',
    controller: 'localRestaurantsCtrl'
  })

  .state('welcomeToResort', {
    url: '/tour',
    templateUrl: 'templates/welcomeToResort.html',
    controller: 'welcomeToResortCtrl'
  })

  .state('map', {
    url: '/map',
    templateUrl: 'templates/map.html',
    controller: 'mapCtrl'
  })

  .state('cities', {
    url: '/cities',
    templateUrl: 'templates/cities.html',
    controller: 'citiesCtrl'
  })

$urlRouterProvider.otherwise('/tour')

  

});