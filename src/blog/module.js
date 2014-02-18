define(function(require) {
    var createModule = require('ngRequire/createModule');
    var elggCore = require('elgg/core/module');

    return createModule('elgg/blog', [elggCore], {
        "directives": [
            "elggBlogSaveForm"
        ],
        "states": {
            "blog": require('./states/blog/main'),
            "blog.add": require('./states/blog.add/main'),
            "blog.edit": require('./states/blog.edit/main'),
            "blog.view": require('./states/blog.view/main'),
        }
    });
});
