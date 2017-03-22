var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", function($scope){
	
	$scope.uglyThings = []
	
	$scope.passAlong = function(){
		var ugly = {
			
		}
		ugly.postTitle = $scope.title;
		ugly.postImg = $scope.img;
		ugly.postDescription = $scope.description;
		$scope.uglyThings.push(ugly);
	}
	
	
}])