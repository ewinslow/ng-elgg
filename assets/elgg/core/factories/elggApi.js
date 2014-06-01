/**
 * @ngInject
 */
export default function(Restangular) {
    return Restangular.withConfig(function(config) {
        config.setBaseUrl('api');
        config.setRequestSuffix('.json');
    });
};
