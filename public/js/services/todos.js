angular.module('todoService', [])

        .factory('GetPosts', ['$http', function ($http) {
            return {
                get: function () {
                    return $http.get('http://jsonplaceholder.typicode.com/posts');
                }
            }
        }])
        .factory('AddPostService', ['$http', function($http){
          return {
            save : function(post){
              return $http.post('http://jsonplaceholder.typicode.com/posts',post);
            }
          }
        }])
        .factory('DeletePostService', ['$http', function($http){
          return {
            delete : function(id){
              return $http.delete('http://jsonplaceholder.typicode.com/posts/'+id);
            }
          }
        }])
    .filter('interpolate', ['version', function (version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }])
    .filter('startFrom', function() {
        return function(input, start) {
            if(input && input.length) {
                start = +start; //parse to int
                return input.slice(start);
            }
            return [];
        }
    });
