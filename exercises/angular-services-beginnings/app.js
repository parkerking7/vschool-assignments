var app = angular.module("myApp", ['ngRoute']);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when('/home', {
			controller: 'homeController',
			templateUrl: 'home/home.html'
		})
		.when("/favorites", {
			controller: "favoritesController",
			templateUrl: "favorites/favorites.html"
		})
		.otherwise({
			redirectTo: '/home'
		});

}])
app.service("pokeService", function () {

	this.pokemon = [];

	var self = this;

	this.addPokemon = function (pokeName) {
		
		self.pokemon.push(pokeName);
		console.log(self.pokemon)
		console.log(pokeName);
		return self.pokemon;
	}

	this.removePokemon = function(pokeName) {
		for(var i =0; i < self.pokemon.length; i++){
			if(self.pokemon[i] === pokeName){
				self.pokemon.splice([i], 1);
			}
		}
	}
	
})
