var app = angular.module("photoApp")

app.controller("ContactController", ["$scope", function($scope) {

   twttr.widgets.load(
  document.getElementById("twitter")
);

}]);