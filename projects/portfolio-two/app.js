var app = angular.module("portApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

	$routeProvider
	.when("/enter", {
			templateUrl: "enter/enter.html",
			controller: "EnterController"
		})
		.when("/home", {
			templateUrl: "home/home.html",
			controller: "HomeController"
		})
		.when("/about", {
			templateUrl: "about/about.html",
			controller: "AboutController"
		})
		.when("/works", {
			templateUrl: "works/works.html",
			controller: "WorksController"
		})
		.otherwise({
			redirectTo: "/enter"
		});
}]);


