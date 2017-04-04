var app = angular.module("stateApp");

app.directive("mikeTheMink", function(){
	return {
		restrict: "E",
		templateUrl: "directives/mink.html"
	}
	
})