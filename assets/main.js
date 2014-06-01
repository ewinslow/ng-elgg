requirejs.config({
    baseUrl: "./assets/"
});

define('main', function(require) {
    var angular = require('angular');
    var profile = require('json!profile.json');
    var elggAccounts = require('elgg/accounts/module').default;
    var elggBlog = require('elgg/blog/module').default;
    var elggCore = require('elgg/core/module').default;
    var elggEvents = require('elgg/events/module').default;
    var elggPhotos = require('elgg/photos/module').default;
    var elggPosts = require('elgg/posts/module').default;
    
        
    
    var demo = angular.module('demo', [
        elggAccounts.name,
        elggBlog.name,
        elggCore.name,
        elggEvents.name,
        elggPhotos.name,
        elggPosts.name,
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
