/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('cities', [])

.service('CitiesService', [function(){
    
    var cities_list = [
        {
            id: "Amarillo",
            st: "TX",
            picUrl: "http://texasflag.facts.co/texasstateflagof/texasflagpicture5.png",
            lat: 35.2193611,
            lon: -101.7059167,
            weather: {
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                pressure: 0,
                summary: "",
                windSpeed: 0,
                windBearing: 0
            }
        },
        {
            id: "Houston",
            st: "TX",
            picUrl: "http://texasflag.facts.co/texasstateflagof/texasflagpicture5.png",
            lat: 29.7604267,
            lon: -95.3698028,
            weather: {
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                pressure: 0,
                summary: "",
                windSpeed: 0,
                windBearing: 0
            }
        },
        {
          id: "San Antonio",
            st: "TX",
            picUrl: "http://texasflag.facts.co/texasstateflagof/texasflagpicture5.png",
            lat: 29.4241219,
            lon: -98.49362819999999,
            weather: {
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                pressure: 0,
                summary: "",
                windSpeed: 0,
                windBearing: 0
            }
        },
        {
          id: "Dallas",
            st: "TX",
            picUrl: "http://texasflag.facts.co/texasstateflagof/texasflagpicture5.png",
            lat: 32.7766642,
            lon: -96.79698789999999,
            weather: {
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                pressure: 0,
                summary: "",
                windSpeed: 0,
                windBearing: 0
            }
        },
        {
          id: "Austin",
            st: "TX",
            picUrl: "http://texasflag.facts.co/texasstateflagof/texasflagpicture5.png",
            lat: 30.267153,
            lon: -97.7430608,
            weather: {
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                pressure: 0,
                summary: "",
                windSpeed: 0,
                windBearing: 0
            }
        },
        {
          id: "New York",
            st: "NY",
            picUrl: "http://newyorkflag.facts.co/newyorkstateflagof/NewYorkflagpicture2.png",
            lat: 40.7127837,
            lon: -74.0059413,
            weather: {
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                pressure: 0,
                summary: "",
                windSpeed: 0,
                windBearing: 0
            }
        },
        {
          id: "Los Angelas",
            st: "CA",
            picUrl: "http://californiaflag.facts.co/californiastateflagof/californiaflagpicture2.png",
            lat: 34.0522342,
            lon: -118.2436849,
            weather: {
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                pressure: 0,
                summary: "",
                windSpeed: 0,
                windBearing: 0
            }
        },
        {
          id: "Chicago",
            st: "IL",
            picUrl: "http://illinoisflag.facts.co/illinoisstateflagof/IllinoisFlagPicture2.png",
            lat: 41.8781136,
            lon: -87.6297982,
            weather: {
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                pressure: 0,
                summary: "",
                windSpeed: 0,
                windBearing: 0
            }
        },
        {
          id: "Philadelphia",
            st: "PA",
            picUrl: "http://pennsylvaniaflag.facts.co/pennsylvaniastateflagof/PennsylvaniaFlagPicture1.png",
            lat: 39.9525839,
            lon: -75.1652215,
            weather: {
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                pressure: 0,
                summary: "",
                windSpeed: 0,
                windBearing: 0
            }
        },
        {
          id: "Phoenix",
            st: "AZ",
            picUrl: "http://arizonaflag.facts.co/arizonastateflagof/ArizonaFlagPicture1.png",
            lat: 33.4483771,
            lon: -112.0740373,
            weather: {
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                pressure: 0,
                summary: "",
                windSpeed: 0,
                windBearing: 0
            }
        },
        {
          id: "San Diego",
            st: "CA",
            picUrl: "http://californiaflag.facts.co/californiastateflagof/californiaflagpicture2.png",
            lat: 32.715738,
            lon: -117.1610838,
            weather: {
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                pressure: 0,
                summary: "",
                windSpeed: 0,
                windBearing: 0
            }
        },
        {
          id: "Indianapolis",
            st: "IN",
            picUrl: "http://indianaflag.facts.co/indianastateflagof/IndianaFlagPicture2.png",
            lat: 39.768403,
            lon: -86.158068,
            weather: {
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                pressure: 0,
                summary: "",
                windSpeed: 0,
                windBearing: 0
            }
        },
        {
          id: "Jacksonville",
            st: "FL",
            picUrl: "http://facts.co/pix/FloridaStateFlag.jpg",
            lat: 30.3321838,
            lon: -81.65565099999999,
            weather: {
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                pressure: 0,
                summary: "",
                windSpeed: 0,
                windBearing: 0
            }
        },
        {
          id: "Columbus",
            st: "OH",
            picUrl: "http://ohioflag.facts.co/ohiostateflagof/OhioFlagPicture2.png",
            lat: 39.9611755,
            lon: -82.99879419999999,
            weather: {
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                pressure: 0,
                summary: "",
                windSpeed: 0,
                windBearing: 0
            }
        },
        {
          id: "Charlotte",
            st: "NC",
            picUrl: "http://northcarolinaflag.facts.co/northcarolinastateflagof/NorthCarolinaFlagPicture2.png",
            lat: 35.2270869,
            lon: -80.8431267,
            weather: {
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                pressure: 0,
                summary: "",
                windSpeed: 0,
                windBearing: 0
            }
        },
        {
          id: "Denver",
            st: "CO",
            picUrl: "http://coloradoflag.facts.co/coloradostateflagof/ColoradoFlagPicture2.png",
            lat: 39.7392358,
            lon: -104.990251,
            weather: {
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                pressure: 0,
                summary: "",
                windSpeed: 0,
                windBearing: 0
            }
        },
      ];
      
      var cities_ids = {};

      for (var i=0; i < cities_list.length; i++){
        cities_ids[cities_list[i].id] = cities_list[i];
      }

    return {
        list: cities_list,
        ids: cities_ids
    };

}]);