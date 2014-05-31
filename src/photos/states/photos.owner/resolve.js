export default {
    /**
     * @ngInject
     */
    albums: function(evanDatabase, $route) {
        return evanDatabase.getAlbums({
            alias: $route.current.params.alias
        });
    }
};