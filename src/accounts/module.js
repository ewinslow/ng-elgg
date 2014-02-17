define(function(require) {
    var createModule = require('ngRequire/createModule');
    var elggCore = require('elgg/core/module');

    return createModule('elgg/accounts', [elggCore], {
        "states": {
            "accounts.forgotpassword": require('./states/accounts.forgotpassword/main'),
            "accounts.login": require('./states/accounts.login/main'),
            "accounts.register": require('./states/accounts.register/main')
        }
    });
});
