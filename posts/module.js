define(function(require) {
    var createModule = require('ngRequire/createModule');
    var elggCore = require('elgg/core/module');

    return createModule('elgg/posts', [elggCore], {
    	"states": {
    		"posts": {
    			"controller": true,
    			"parent": "default",
    			"resolve": [
    				"posts"
    			],
    			"template": true,
    			"url": "/posts"
    		},
    		"posts.single": {
    			"controller": true,
    			"resolve": [
    				"post"
    			],
    			"template": true,
    			"url": "/:post"
    		}
    	}
    });
});
