var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", "weatherService", function ($scope, weatherService) {


	weatherService.getWeather().then(function (response) {
		console.log(response.data.currently.temperature);
	})


}])

app.service("weatherService", function ($http) {

	this.getWeather = function () {
		return $http.jsonp("https://api.darksky.net/forecast/46f953621ee05f1bec7b5ebfd43f4f49/40.7608,-111.8910?callback=JSON_CALLBACK")
	}

})
