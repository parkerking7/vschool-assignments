var app = angular.module("bountyApp");

app.service("bountyService", function ($http) {
	
	
	this.grab = function(){
		return $http.get("http://localhost:3000/bounty");
	}
	
	this.make = function(bounty){
		return $http.post("http://localhost:3000/bounty", bounty);
	}
	this.bye = function(id){
		return $http.delete("http://localhost:3000/bounty/" + id);
	}
	
})