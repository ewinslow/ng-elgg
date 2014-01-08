define(function() {
    return {
        events: function($http) {
            return $http.get('api/events.json').then(function(result) {
                return result.data;
            });
        }
    };
});
