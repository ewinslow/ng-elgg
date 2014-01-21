define(function() {
    return {
        'posts': function($http) {
            return $http.get('api/posts.json').then(function(result) {
                return result.data;
            });
        }
    };
});
