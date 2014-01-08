define(function(require) {
    var createModule = require('ngRequire/createModule');
    var elggCore = require('elgg/core/module');

    return createModule('elgg/accounts', [elggCore], {
    	"states": {
    		"login2": {
    			"controller": true,
    			"template": true,
    			"url": "/login2"
    		}
    	}
    });
});
