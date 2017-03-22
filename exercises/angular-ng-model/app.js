var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", function ($scope) {

	
	$scope.nameOfVariable = function() {
		return "It looks like you are " + $scope.age + " years old and it looks like you are " + $scope.cool;
	}
}])

