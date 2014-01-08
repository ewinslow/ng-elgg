define(function(require) {
    var createModule = require('ngRequire/createModule');
    var deps = [
        require('elgg/core/module'),
    ];

    return createModule('elgg/photos', deps, {
    	"states": {
    		"photos": {
    			"controller": true,
    			"parent": "default",
    			"resolve": [
    				"photos", "i18n"
    			],
    			"template": true,
    			"url": "/photos"
    		},
    		"photos.add": {
    			"controller": true,
    			"parent": "default",
    			"template": true,
    			"url": "/photos/add/:container"
    		},
    		"photos.album": {
    			"controller": true,
    			"parent": "default",
    			"resolve": [
    				"album"
    			],
    			"template": true,
    			"url": "/photos/albums/:album"
    		},
    		"photos.image": {
    			"controller": true,
    			"parent": "default",
    			"resolve": [
    				"image"
    			],
    			"template": true,
    			"url": "/photos/image/:image"
    		}
    	}
    });
});
