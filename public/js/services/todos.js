angular.module('todoService', [])

        .factory('GetPosts', ['$http', function ($http) {
            return {
                get: function () {
                    return $http.get('http://jsonplaceholder.typicode.com/posts');
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
