var app = angular.module("apiApp");

app.service("weatherService", function ($http) {

	this.getLocation = function () {
		return $http.get("http://jsonip.com/?callback=", function (response) {
				return response.data;
			})
			.then(function (response) {
				this.ip = response.data.ip
				return $http.get("http://freegeoip.net/json/" + ip);
			})
	}
	this.getWeather = function(lat, long) {
		return $http.jsonp("https://api.darksky.net/forecast/46f953621ee05f1bec7b5ebfd43f4f49/" + lat + "," + long + "?callback=JSON_CALLBACK")
	}

})
