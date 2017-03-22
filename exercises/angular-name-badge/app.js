var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", function ($scope) {

	$scope.logFunc = function () {
		console.log($scope.firstName, $scope.lastName, $scope.email, $scope.birthPlace, $scope.phone, $scope.food, $scope.about)
		$scope.empName = function () {
			return "Name : " + $scope.firstName + " " + $scope.lastName;
		}
		$scope.empEmail = "Email: " + $scope.email;
		$scope.empBirthPlace = "Place of birth: " + $scope.birthPlace;
		$scope.empPhone = "Phone: " + $scope.phone;
		$scope.empFood = "Favorite food: " + $scope.food;
		$scope.empAbout = $scope.about;
		$scope.class="employeeForm"
	}

}])
