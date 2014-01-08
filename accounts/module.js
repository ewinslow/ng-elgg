define(function(require) {
    var createModule = require('ngRequire/createModule');
    var moduleConfig = require('json!elgg/accounts/module.json');
    var elggCore = require('elgg/core/module');

    return createModule('elgg/accounts', [elggCore], moduleConfig);
});
