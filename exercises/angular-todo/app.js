var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", "changeService", function ($scope, changeService) {

	$scope.listArr = [];

	$scope.submitList = function () {

		var listItem = {

		}
		listItem.title = $scope.itemName;
		listItem.price = $scope.itemPrice;
		listItem.description = $scope.itemDescription;
		listItem.imgUrl = $scope.itemUrl;
		changeService.postInfo();
	}
	changeService.pullInfo().then(function (response) {
		var listItems = response.data;
		for (var i = 0; i < listItems.length; i++) {
			$scope.listArr.push(listItems[i]);
		}
	})

	$scope.deleteItem = function (i) {
		$scope.listArr = changeService.deleteInfo(i, $scope.listArr)
		$scope.listArr.splice(i, 1);
	}
	$scope.edit = function (input) {
		changeService.editInfo(input)
	}
}])

app.service("changeService", function ($http) {

	this.pullInfo = function () {
		return $http.get("http://api.vschool.io/parker/todo")
	}
	this.postInfo = function (listItem) {
		$http.post("http://api.vschool.io/parker/todo/", listItem)
			.then(function (response) {
				return (response);
			})
	}
	this.deleteInfo = function (i, listArr) {
		$http.delete("http://api.vschool.io/parker/todo/" + listArr[i]._id).then(function (response) {})
		return listArr;
	}
	this.editInfo = function (input) {
		return $http.put("http://api.vschool.io/parker/todo/" + input._id, input)
	}
})
