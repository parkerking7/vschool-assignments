var app = angular.module("portApp");

app.directive("navBar", function(){
    return{
        restrict:"E",
        templateUrl:"nav-directive.html"
    }
});