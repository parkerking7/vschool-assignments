var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", "$http", function ($scope, $http) {
	$scope.enemies = [];
	
	$http.get("http://api.vschool.io:6543/hitlist.json")
		.then(function (response) {
		var allHits = response.data;
			for(var i = 0; i < allHits.length; i++){
				
				$scope.enemies.push(allHits[i]);
				
			}
		})


}])
