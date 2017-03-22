var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", function($scope) {
	
	
	$scope.persons = []
	
	$scope.newEmp = function(){
		var person = {
			
		}
		person.empName = $scope.firstName + " " + $scope.lastName;
		person.empPhone = $scope.phone.substring(0,3) + "-" + $scope.phone.substring(3,6) + "-" + $scope.phone.substring(6,10) ;
		person.empBirth = $scope.birthPlace;
		person.empEmail = $scope.email;
		person.empFood = $scope.food;
		person.empAbout = $scope.about;
		$scope.persons.push(person);
	}
}]);