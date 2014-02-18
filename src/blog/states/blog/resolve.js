define({
    blogs: function($http) {
        return $http.get('api/blog.json').then(function(response) {
            return response.data;
        });
    }    
});
