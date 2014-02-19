requirejs.config({
    baseUrl: "./assets/"
});

define('main', function(require) {
    var angular = require('angular');
    var profile = require('json!profile.json');
    
    var demo = angular.module('demo', [
        require('elgg/accounts/module').name,
        require('elgg/blog/module').name,
        require('elgg/core/module').name,
        require('elgg/events/module').name,
        require('elgg/photos/module').name,
        require('elgg/posts/module').name,
    ]).value('profile', profile).run(function(profile) {
        
        profile.appcache = profile.appcache || {};
        // maxAge defaults to once-per-hour
        var maxAge = profile.appcache.maxAge || 1000 * 60 * 60;
        
        setInterval(function() {
            applicationCache.update();
        }, maxAge);
    });

    angular.bootstrap(document, [demo.name]);
});
require(['main']);
