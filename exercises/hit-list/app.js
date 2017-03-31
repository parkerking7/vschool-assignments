var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", "hitService", function ($scope, hitService) {
	
	$scope.getip = function(json){
		console.log(json.ip)
	}
	$scope.enemies = [];

	hitService.getHits().then(function (response) {
		var allHits = response.data
		for (var i = 0; i < allHits.length; i++) {

			$scope.enemies.push(allHits[i]);

		}
	})

}])

app.service("hitService", function ($http) {

	this.getHits = function () {
		return $http.get("http://api.vschool.io:6543/hitlist.json");
	}
})


