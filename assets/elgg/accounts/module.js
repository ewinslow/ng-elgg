define(function(require) {
    var createModule = require('ngRequire/createModule');
    var elggCore = require('elgg/core/module');

    return createModule('elgg/accounts', [elggCore], {
        "states": {
            "forgotpassword": require('./states/forgotpassword/main'),
            "login": require('./states/login/main'),
            "register": require('./states/register/main'),
        }
    });
});
