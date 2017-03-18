angular.module('DashboardCtrl', [])
.controller('DashboardController', ['$scope', '$http','filterFilter', '$filter', 'ngTableParams','GetPosts', function ($scope, $http, filterFilter, $filter, ngTableParams,GetPosts) {

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

}]);
