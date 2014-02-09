define(function(require) {
    var createModule = require('ngRequire/createModule');
    var elggCore = require('elgg/core/module');

    return createModule('elgg/blog', [elggCore], {
        "directives": [
            "elggBlogSaveForm"
        ],
        "states": {
            "blog": {
                "controller": true,
                "parent": "default",
                "template": true,
                "url": "/blog"
            }
        }
    });
});
