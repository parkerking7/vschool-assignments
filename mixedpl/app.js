var app = angular.module("photoApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

	$routeProvider
		.when("/home", {
			templateUrl: "home/home.html",
			controller: "HomeController"
		})
		.when("/contact", {
			templateUrl: "contact/contact.html",
			controller: "ContactController"
		})
		.when("/pictures", {
			templateUrl: "pictures/pictures.html",
			controller: "PicturesController"
		})

		.when("/about", {
			templateUrl: "about/about.html",
			controller: "AboutController"
		})
		.otherwise({
			redirectTo: "/home"
		});

}])
