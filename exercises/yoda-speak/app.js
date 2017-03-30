var app = angular.module("myApp", []);

app.service("translateService", ["$http", function ($http) {

	var req = {
		headers: {
			"X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
		},
	}
	this.translate = function (sentence) {
		console.log(sentence)
		return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + sentence, req)

	}

}])

app.controller("mainCtrl", ["$scope", "translateService", function ($scope, translateService) {

	$scope.translate = function (sentence) {
		translateService.translate(sentence).then(function (response) {
			$scope.reply = response.data;
		})
	}


}]);
