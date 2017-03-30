var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", "charService", function ($scope, charService) {

	$scope.characters = charService.characters;

	$scope.newChar = function (info) {

		charService.addChar(info);
		$scope.img = {

		}
	}
 
}])

app.service("charService", function () {

	this.characters = [];

	var self = this;

	this.addChar = function (info) {

		self.characters.push(info);
		console.log(self.characters)
	}



})
