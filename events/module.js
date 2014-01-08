define(function(require) {
    var createModule = require('ngRequire/createModule');
    var elggCore = require('elgg/core/module');

    return createModule('elgg/events', [elggCore], {
    	"states": {
    		"events": {
    			"controller": true,
    			"parent": "default",
    			"resolve": [
    				"events"
    			],
    			"template": true,
    			"url": "/events"
    		},
    		"events.single": {
    			"controller": true,
    			"resolve": [
    				"event"
    			],
    			"template": true,
    			"url": "/:event"
    		}
    	}
    });
});
