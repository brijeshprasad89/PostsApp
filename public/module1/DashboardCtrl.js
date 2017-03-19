angular.module('DashboardCtrl', [])
.controller('DashboardController', ['$scope', '$http','filterFilter', '$filter', 'ngTableParams','GetPosts','AddPostService','DeletePostService', function ($scope, $http, filterFilter, $filter, ngTableParams,GetPosts,AddPostService,DeletePostService) {

$scope.getPosts = function(){
    GetPosts.get()
    .then(function(data){
        console.log("gitdata",data)
        $scope.posts = data;
    },function(error){
        console.log("error",error)
    });
}
$scope.getPosts();

$scope.savePost =  function(){
  var Promise = AddPostService.save($scope.post);
  Promise.then(function(response){
    var post =  response.data;
    alert("Following post has been created\n"+"Id: "+post.id+"\nUser-id: "+post.userid+"\nTitle: "+post.title+"\nBody:"+post.body);
  });
  $scope.post = null;
  angular.element('#myModal').modal('hide');
}

$scope.deletePost =  function(id){
  var deletePostPromise = DeletePostService.delete(id);
  deletePostPromise.then(function(response){
    alert("Post with ID "+id+" deleted successfully");
  })
}

}]);
