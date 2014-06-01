export default {
    /**
     * @ngInject
     */
    blog: function($http, $stateParams) {
        var url = 'api/blog/' + $stateParams.alias + '.json';
        return $http.get(url).then(function(response) {
            return response.data;
        });
    }
};
