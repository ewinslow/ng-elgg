export default {
    /**
     * @ngInject
     */
    'posts': function($http) {
        return $http.get('api/posts.json').then(function(result) {
            return result.data;
        });
    }
};
