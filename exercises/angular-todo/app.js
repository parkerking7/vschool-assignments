var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", "$http", function ($scope, $http) {

	$scope.listArr = [];

	$scope.submitList = function () {

		var listItem = {

		}
		listItem.title = $scope.itemName;
		listItem.price = $scope.itemPrice;
		listItem.description = $scope.itemDescription;
		listItem.imgUrl = $scope.itemUrl;
		$http.post("http://api.vschool.io/parker/todo/", listItem)
			.then(function (response) {
				console.log(response)
			})
	}
	$http.get("http://api.vschool.io/parker/todo")
		.then(function (response) {
			var listItems = response.data;
			for (var i = 0; i < listItems.length; i++) {

				$scope.listArr.push(listItems[i]);

			}
		})
	$scope.deleteItem = function (i) {
		$http.delete("http://api.vschool.io/parker/todo/" + $scope.listArr[i]._id).then(function (response) {});
		$scope.listArr.splice(i, 1);
	}
	$scope.edit = function(input){
		$http.put("http://api.vschool.io/parker/todo/" + input._id, input)
	}
}])
