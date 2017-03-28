var app = angular.module("stateApp", ['ngRoute']);

app.config(function ($routeProvider){
	
	$routeProvider.when('/home', {
		controller: 'homeController',
		templateUrl: 'home/home.html'
	})
	.when('/about', {
		controller: 'aboutController',
		templateUrl: 'about/about.html'
	})
	.when('/whyilove', {
		controller: 'whyiloveController',
		templateUrl: 'whyilove/whyilove.html'
	})
	.otherwise({
            redirectTo: '/home'
        });
})