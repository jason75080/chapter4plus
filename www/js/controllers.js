angular.module('app.controllers', [])
  
.controller('alohaResortCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('reservationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.reservation = 
    {
        checkin: new Date(),
        checkout: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        room: 156,
        rate: 121,
        wifi: 'resortwifi'
    };

}])
   
.controller('currentWeatherCtrl', ['$scope', '$stateParams', 'DSWeatherService', 'CitiesService', '$firebaseObject', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, DSWeatherService, CitiesService, $firebaseObject, $ionicLoading) {
    
    $scope.city = CitiesService.ids[$stateParams.cityid];
    
    var cityName = $stateParams.cityid;
    
    //enable our ability to contact the database at a certain point
    var ref  = firebase.database().ref().child(cityName).child("Weather");
    //obtain the firebas object so that we can sync changes
    $scope.db = $firebaseObject(ref);
    
    $scope.getWeather = function(){
        
        //ionic's "I'm busy loading graphic"
        $ionicLoading.show();   

        DSWeatherService.getCurrentConditions($scope.city)
            .then(function(res){
                $scope.city.weather.temp = res.data.currently.temperature;
                $scope.city.weather.tempMin = res.data.daily.data[0].temperatureMin;
                $scope.city.weather.tempMax = res.data.daily.data[0].temperatureMax;
                $scope.city.weather.humidity = res.data.currently.humidity * 100;
                $scope.city.weather.summary = res.data.currently.summary;
                $scope.city.weather.windSpeed = res.data.currently.windSpeed;
                $scope.city.weather.windBearing = res.data.currently.windBearing;
    
                $scope.db.latest_temp = res.data.currently.temperature;
                $scope.db.latest_tempMin = res.data.daily.data[0].temperatureMin;
                $scope.db.latest_tempMax = res.data.daily.data[0].temperatureMax;
                $scope.db.latest_humidity = res.data.currently.humidity * 100;
                $scope.db.latest_summary = res.data.currently.summary;
                $scope.db.latest_windSpeed = res.data.currently.windSpeed;
                $scope.db.latest_windBearing = res.data.currently.windBearing;
                $scope.db.last_accessed = new Date().getTime();
    
    
                $scope.db.$save().then(function(){
                    console.log("SAVED");
                }).catch(function(error){
                    console.log("PROBLEM: " + error);
                });
                
                //hide ionic's "I'm busy loading" graphic
                $ionicLoading.hide();
                
            })
            .catch(function(err){
                console.log(err);
                $ionicLoading.show({
                  template: 'Could not load weather. Please try again later.',
                  duration: 3000
                });
                
                //hide ionic's "I'm busy loading graphic"
                $ionicLoading.hide();    
            });
            
            //ionic's "I'm busy loading graphic"
            $ionicLoading.hide();   
    };

//and call the method above
$scope.getWeather();

}

])
   
.controller('localRestaurantsCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
    $scope.page = 0;
    $scope.total = 1;
    $scope.restaurants = [];
    
    $scope.getRestaurants = function () {
        $scope.page++;
        $http.get('https://ionic-in-action-api.herokuapp.com/restaurants?page=' + $scope.page).success(function (response) {
            angular.forEach(response.restaurants, function (restaurant) {
            $scope.restaurants.push(restaurant);
        });
        $scope.total = response.totalPages;
        $scope.$broadcast('scroll.infiniteScrollComplete');
        }).error(function (err) {
            $scope.$broadcast('scroll.infiniteScrollComplete');
            console.log(err);
        });
    };
    
    $scope.getRestaurants();

}])
   
.controller('welcomeToResortCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.link = "#/home";
}])
   
.controller('mapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('citiesCtrl', ['$scope', '$stateParams', 'CitiesService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, CitiesService) {

    $scope.narrowed_cities = CitiesService.list;
    $scope.data = {
      search: ''
    }
    
    $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s === ''){
          $scope.narrowed_cities = CitiesService.list;
          return;
      }
      
      $scope.narrowed_cities = CitiesService.list.filter(function(city){
        if (city.id.toLowerCase().indexOf(s) > -1 || city.st.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
    };

}])
 