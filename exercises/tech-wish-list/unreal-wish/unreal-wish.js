var app = angular.module("techApp");

app.controller("UnrealController", ["$scope", function ($scope) {


	$scope.wishes = [
		{
			imgUrl: "https://regmedia.co.uk/2014/07/29/blingphone.png",
			name: "Golden Iphone",
			price: 100000
		},
		{
			imgUrl: "https://regmedia.co.uk/2014/07/29/blingphone.png",
			name: "Golden Iphone",
			price: 100000
		},
		{
			imgUrl: "https://regmedia.co.uk/2014/07/29/blingphone.png",
			name: "Golden Iphone",
			price: "Too expensive if you have to ask"
		},
		{
			imgUrl: "https://regmedia.co.uk/2014/07/29/blingphone.png",
			name: "Golden Iphone",
			price: 100000
		}
					]

}]);
