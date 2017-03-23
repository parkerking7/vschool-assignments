var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", "$http", function ($scope, $http) {

	var req = {

		headers: {
			"X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
		},
	}

	$scope.translate = function () {
		$http.get("https://yoda.p.mashape.com/yoda?sentence=" + $scope.normSentence, req)
			.then(function (response) {
				$scope.reply =response.data;
			})
	}

			}]);
