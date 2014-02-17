define(function() {
    /**
     * @ngInject
     */
    var Controller = function($state, $window) {
        /** @private */
        this.location = $window.location;

        this.menuItems = [{
            href: $state.href('index'),
            label: 'Home',
            icon: 'home',
        }, {
            href: $state.href('photos'),
            label: 'Photos',
            icon: 'photo',
        }, {
            href: $state.href('posts'),
            label: 'Posts',
            icon: 'none'
        }, {
            href: $state.href('events'),
            label: 'Events',
            icon: 'none',
        }, {
            href: $state.href('login'),
            label: "Log in",
            icon: 'none'
        }];
    };

    Controller.prototype.reload = function() {
        this.location.reload();
    };

    return Controller;
});
