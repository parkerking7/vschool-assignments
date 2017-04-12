var app = angular.module("rockApp");

app.service("voterService", function ($http) {


    this.collect = function(){
        return $http.get("http://localhost:3000/posts")
    }

    this.create = function(post){
        return $http.post("http://localhost:3000/posts", post)
    }
    this.delete = function(id){
        return $http.delete("http://localhost:3000/posts/" + id)
    }
    this.edit = function(id, edits){
        return $http.put("http://localhost:3000/posts/" + id, edits)
    }

})