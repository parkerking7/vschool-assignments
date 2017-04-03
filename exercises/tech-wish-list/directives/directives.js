var app = angular.module('techApp')

app.directive('wishList', function () {
    return {
        templateUrl:"directives/wishlist-item/wishlist.html",
		restict: "E"
    };
});

//