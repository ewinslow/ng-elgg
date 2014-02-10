define(function(require) {
    var createModule = require('ngRequire/createModule');
    var elggCore = require('elgg/core/module');

    return createModule('elgg/accounts', [elggCore], {
        "states": {
            "forgotpassword": {
                "controller": true,
                "parent": "default",
                "template": true,
                "url": "/forgotpassword"
            },
            "login": {
                "controller": true,
                "parent": "default",
                "template": true,
                "url": "/login"
            },
            "login2": {
                "controller": true,
                "template": true,
                "url": "/login2"
            },
            "register": {
                "parent": "default",
                "controller": true,
                "template": true,
                "url": "/register"
            }
        }
    });
});
