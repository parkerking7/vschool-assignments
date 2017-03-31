var app = angular.module("apiApp", ["ngRoute"]);

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
		.otherwise({
			redirectTo: "/home"
		});
}])
