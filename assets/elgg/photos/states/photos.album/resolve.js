export default {
    /**
     * @ngInject
     */
    album: function($http, $state) {
        return $http.get('api/albums.json').success(function(result) {
            return result.items[$state.album - 1];
        });
    }
};