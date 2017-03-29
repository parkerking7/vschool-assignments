var app = angular.module("myApp");

app.controller("homeController", ["$scope", "dataService", function ($scope, dataService) {

	$scope.red = function () {
		if ($scope.redCounter === 0) {
			$scope.reset()
		} else {
			$scope.redCounter -= 1;
			$scope.blueCounter += 1;
		}
	}

	$scope.blue = function () {
		if ($scope.blueCounter === 0) {
			$scope.reset()
		} else {
			$scope.blueCounter -= 1;
			$scope.redCounter += 1;
		}
	}

	$scope.reset = function () {
		$scope.redCounter = 100;
		$scope.blueCounter = 100;
	}

	$scope.redCounter = dataService.redCounter
	$scope.blueCounter = dataService.blueCounter
}])
