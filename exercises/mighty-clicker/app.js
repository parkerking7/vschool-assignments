var app = angular.module("myApp", ['ngRoute']);

app.config(["$routeProvider", function ($routeProvider) {

	$routeProvider
		.when('/home', {
			controller: 'homeController',
			templateUrl: 'home/home.html'
		})
		.otherwise({
			redirectTo: '/home'
		});
}]);

app.service("dataService", function(){
	this.redCounter= 100;
	this.blueCounter = 100;
})