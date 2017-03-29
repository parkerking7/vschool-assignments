var app = angular.module("myApp");

app.controller("homeController", ["$scope","pokeService", function ($scope, pokeService) {

	$scope.pokemon = [];

	$scope.addPokemon = function (pokeName) {
		pokeService.addPokemon(pokeName);
	} 
	
}])


