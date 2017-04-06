var app = angular.module("apiApp");

app.controller("WeatherController", ["$scope", "weatherService", function ($scope, weatherService) {

	$scope.week = [];
	$scope.weekday = []
	weatherService.getLocation().then(function (response) {
		var response = response.data;
		var latitude = response.latitude;
		var longitude = response.longitude;
		weatherService.getWeather(latitude, longitude).then(function (response) {
			var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			
			var today = new Date().getDay();
			var response = response.data;
			var days = response.daily.data
			for (var i = 0; i < days.length; i++) {
				days[i].day = weekdays[today];
//				$scope.week.push(days[i]);
				if (today < 6) {
					today++
				} else {
					today = 0
				}

			}
			$scope.week = days;
			

		})
	})
	


}])

app.filter('percentage', ['$filter', function ($filter) {
	return function (input, decimals) {
		return $filter('number')(input * 100, decimals) + '%';
	};
}]);
