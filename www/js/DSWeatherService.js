/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('DSWeatherService', [])
.filter('direction', function() {
  
  var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];  
  
  //filter method for getting wind direction
  return function(degree) {
    if (degree > 338) {
      degree = 360 - degree;
    }
    var index = Math.floor((degree + 22) / 45);
    return directions[index];
  };
})

///// WEATHER SERVICE FACTORY //////////////////////////////////////////////////
.factory('DSWeatherService',['$sce','$http', function($sce, $http){

    //factory allows us to specify an object to send back
    var dsweatherService = {};
    
    //DarkSky API key
    var key = "5703850e53c12bb91f4e5d4c9eae6097";

    //get current rest conditions
    dsweatherService.getCurrentConditions = function(city){

        //for the API
        var url = "https://api.darksky.net/forecast/" +
                key + "/" + city.lat + "," + city.lon + "?callback=JSON_CALLBACK";
                
        console.log(url);

        //the current ionic bundle is supporting Angular 1.5.3
        //thus, the following won't work

        //var trustedurl = $sce.trustAsResourceUrl(url);
        //return $http.jsonp(trustedurl, {jsonpCallbackParam: 'callback'});

        return $http.jsonp(url);

    };
    
    return dsweatherService;

}]);