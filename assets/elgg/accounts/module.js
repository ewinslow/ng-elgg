define(function(require) {
    var createModule = require('ngRequire/createModule');
    var elggCore = require('elgg/core/module');

    return createModule('elgg/accounts', [elggCore], {
        "states": {
            "login": require('./states/login/main'),
        }
    });
});
