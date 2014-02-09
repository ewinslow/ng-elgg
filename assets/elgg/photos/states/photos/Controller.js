define(function() {
    /**
     * @ngInject
     * @constructor
     */
    return function Controller(photos, i18n) {
        this.photos = photos;

        this.i18n = i18n;
    };
});
