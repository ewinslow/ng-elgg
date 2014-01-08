define(function(require) {
    var createModule = require('ngRequire/createModule');
    var moduleConfig = require('json!elgg/posts/module.json');
    var elggCore = require('elgg/core/module');

    return createModule('elgg/posts', [elggCore], moduleConfig);
});
