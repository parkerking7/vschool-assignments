var app = angular.module("bountyApp", []);

app.controller("mainCtrl", ["$scope","bountyService", function($scope, bountyService){
	
	 $scope.bounties = [];
	
	bountyService.grab().then(function(response){
		$scope.bounties.push(response.data);
		$scope.bounties = $scope.bounties[0]
	});
	
	$scope.submitList = function(bounty){
		bountyService.make(bounty).then(function(response){
			$scope.bounties.push(response.config.data);
			$scope.bounty = "";
		})
	}
	$scope.bye = function(id){
		newId = $scope.bounties[id]._id
		console.log(id)
		$scope.bounties.splice(id, 1);
		bountyService.bye(newId).then(function(response){
			
		})
	}
	$scope.edit = function(id, edits){
		console.log(edits);
		bountyService.change(id, edits).then(function(response){
			console.log(response)
		})
	}
	
}])