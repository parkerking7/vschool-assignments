var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", "$http", function($scope, $http){
	$http.get('http://pokeapi.co/api/v1/pokemon/1')
	.then(function(response){
		console.log(response.data);
	});
	
	var todo = {
		title: "Buy house",
		description: "Needed to carry goats",
		completed: "false"
	}
	$http.post("http://api.vschool.io/parker/todo/", todo)
		.then(function(response) {
			  console.log(response.data);
			  })
	
}]);