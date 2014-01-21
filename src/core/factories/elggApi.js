define(function() {
    /**
     * @ngInject
     */
    return function(Restangular) {
        return Restangular.withConfig(function(config) {
            config.setBaseUrl('api');
            config.setRequestSuffix('.json');
        });
    };
});
