define(function(require) {
    require('css!./styles.css');
    
    return {
        "controller": true,
        "parent": "default",
        "template": true,
        "url": "/blog/:alias",
        "resolve": ["blog"],
    }
});