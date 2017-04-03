var app = angular.module("techApp", ["ngRoute"]);


app.config(["$routeProvider", function ($routeProvider) {

	$routeProvider
		.when("/realwish", {
			templateUrl: "real-wish/real-wish.html",
			controller: "RealController"
		})
		.when("/unrealwish", {
			templateUrl: "unreal-wish/unreal-wish.html",
			controller: "UnrealController"
		})
		.otherwise({
			redirectTo: "/realwish"
		});
}])