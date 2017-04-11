var app = angular.module("portApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

	$routeProvider
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
			redirectTo: "/home"
		});
}])

