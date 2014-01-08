define(function() {
    /**
     * @ngInject
     */
    var Controller = function($state, $window) {
        /** @private */
        this.location = $window.location;

        this.menuItems = [{
            href: $state.href('index'),
            label: 'Home'
        }, {
            href: $state.href('photos'),
            label: 'Photos',
        }, {
            href: $state.href('posts'),
            label: 'Posts'
        }, {
            href: $state.href('events'),
            label: 'Events'
        }];
    };

    Controller.prototype.reload = function() {
        this.location.reload();
    };

    return Controller;
});
