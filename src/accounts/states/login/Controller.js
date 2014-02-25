define(function() {
    /**
     * @ngInject
     */
    return function(profile) {
        this.appName = profile.name;
    };
});
