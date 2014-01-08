define(function(require) {
    var createModule = require('ngRequire/createModule');
    var moduleConfig = require('json!elgg/events/module.json');
    var elggCore = require('elgg/core/module');

    return createModule('elgg/events', [elggCore], moduleConfig);
});
