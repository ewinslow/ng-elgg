define(function() {
    /**
     * @ngInject
     */
    return function($stateParams) {
        this.email = $stateParams.email;
    };
});