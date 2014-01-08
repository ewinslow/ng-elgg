define(function(require) {
    var createModule = require('ngRequire/createModule');
    var moduleConfig = require('json!elgg/photos/module.json');
    var deps = [
        require('elgg/core/module'),
    ];

    return createModule('elgg/photos', deps, moduleConfig);
});
