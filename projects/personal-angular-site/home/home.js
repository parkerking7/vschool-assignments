var app = angular.module("apiApp");

app.controller("HomeController", ["$scope", "weatherService", function ($scope, weatherService) {




	weatherService.getLocation().then(function (response) {
		var response = response.data;
		var latitude = response.latitude;
		var longitude = response.longitude;
		weatherService.getWeather(latitude, longitude).then(function (response) {
			var response = response.data
			
			var rain = response.currently.precipProbability;
			rain = Math.floor(rain * 100);

			var clouds = response.currently.cloudCover;
			clouds = Math.floor(clouds * 100);
			
			$scope.forecast = response.daily.summary;
			$scope.weatherResponse = weatherService.shouldGo(rain, clouds)

		})



	})


}])
