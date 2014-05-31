export default class {
    /**
     * @ngInject
     */
    constructor($state, $window, elggMenus) {
        /** @private */
        this.location = $window.location;
        
        var menu = elggMenus.getOrCreate('site');
        
        menu.register('home', function() {
            return {
                href: $state.href('index'),
                label: 'Home',
                icon: 'home',
            };
        });

        menu.register('photos', function() {
            return {
                href: $state.href('photos'),
                label: 'Photos',
                icon: 'photo',
            };
        });
        
        menu.register('blog', function() {
            return {
                href: $state.href('blog'),
                label: 'Blog',
                icon: 'blog',
            };
        });
        
        menu.register('posts', function() {
            return {
                href: $state.href('posts'),
                label: 'Posts',
                icon: 'none',
                section: "default"
            };
        });
        
        menu.register('events', function() {
            return {            
                href: $state.href('events'),
                label: 'Events',
                icon: 'none',
                section: "default"
            };
        });

        menu.register('settings', function() {
            return {
                section: 'alt',
                href: $state.href('settings.account'),
                label: "Settings",
                icon: 'none'
            };
        });
        

        menu.register('login', function() {
            return {
                section: 'alt',
                href: $state.href('login'),
                label: "Log in",
                icon: 'none'
            };
        });

        menu.register('feedback', function() {
            return  {
                section: 'alt',
                href: 'https://github.com/ewinslow/ng-elgg/issues/new',
                label: 'Send feedback',
                icon: 'none'
            };
        });
        
        this.defaultItems = menu.getSection('default');

        this.altItems = menu.getSection('alt');
    }

    reload() {
        this.location.reload();
    }
};