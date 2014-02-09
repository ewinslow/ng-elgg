define(function() {
    return {
        image: function($http, $stateParams) {
            return $http.get('api/photos/' + $stateParams.image + '.json').then(function(result) {
                return result.data;
            });
        }
    };
});
