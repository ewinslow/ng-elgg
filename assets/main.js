requirejs.config({
    baseUrl: "./assets/"
});

define('main', function(require) {
    var angular = require('angular');

    angular.bootstrap(document, [
        require('elgg/accounts/module').name,
        require('elgg/core/module').name,
        require('elgg/events/module').name,
        require('elgg/photos/module').name,
        require('elgg/posts/module').name,
    ]);
});
require(['main']);
