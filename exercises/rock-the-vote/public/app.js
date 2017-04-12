var app = angular.module("rockApp", []);

app.controller("mainCtrl",["$scope","voterService", function($scope,voterService){


$scope.postArr = [];

    $scope.postCreated = function(vote){
        console.log(vote);
        if(vote === undefined){
            toastr.warning("You must enter in a title!")
        } else {
            $scope.postArr[0].push(vote);
            voterService.create(vote);
            toastr.success(vote.title + " has been posted sucessfully")
            $scope.vote = {

            }
        }
    }

voterService.collect().then(function(response){
    $scope.postArr.push(response.data);
})
    $scope.voteUp = function(post){
        post.votes ++
        voterService.edit(post._id, post)
    }
    $scope.voteDown = function(post){
        post.votes --
        voterService.edit(post._id, post)
    }
$scope.delete = function(post, $index){
    $scope.postArr[0].splice($index,1);
    voterService.delete(post._id);
    toastr.error(post.title + " has been deleted sucessfully")
}

$scope.deleteComment = function(post, $index){
    post.comments.splice($index,1)
    voterService.edit(post._id,post)
}
$scope.comment = function(post,comment){
    post.comments.push(comment);
    voterService.edit(post._id, post);
    delete post.comment;
}

}]);

