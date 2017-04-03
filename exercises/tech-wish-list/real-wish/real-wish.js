var app = angular.module("techApp");

app.controller("RealController", ["$scope", function ($scope) {


	$scope.wishes = [
		{
			name: "This is cool",
			price:  22,
			imgUrl: "https://support.apple.com/content/dam/edam/applecare/images/en_US/iphone/featured-content-iphone-transfer-content-ios10_2x.png"
	},
		{
			name: "This is cool",
			price: 22,
			imgUrl: "https://support.apple.com/content/dam/edam/applecare/images/en_US/iphone/featured-content-iphone-transfer-content-ios10_2x.png"
	},
		{
			name: "This is cool",
			price: 22,
			imgUrl: "https://support.apple.com/content/dam/edam/applecare/images/en_US/iphone/featured-content-iphone-transfer-content-ios10_2x.png"
	},
		{
			name: "This is cool",
			price: 22,
			imgUrl: "https://support.apple.com/content/dam/edam/applecare/images/en_US/iphone/featured-content-iphone-transfer-content-ios10_2x.png"
	}
	]
}]);
