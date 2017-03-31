var app = angular.module("apiApp");

app.controller("HomeController", ["$scope", "weatherService", function ($scope, weatherService) {




	weatherService.getLocation().then(function (response) {
		var response = response.data;
		$scope.city = response.city;
		$scope.state = response.region_name;
		var latitude = response.latitude;
		var longitude = response.longitude;
		weatherService.getWeather(latitude, longitude).then(function (response) {
			var response = response.data;
			console.log(response.currently.cloudCover);
			$scope.forecast = response.daily.summary
		})
	})



}])
