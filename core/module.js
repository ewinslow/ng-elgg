define(function(require) {
    var createModule = require('ngRequire/createModule');
    var angular = require('angular');

    require('angular-snap');
    require('angular-translate');

    return createModule('elgg/core', [
        angular.module('pascalprecht.translate'),
        angular.module('snap'),
    ], {
        "directives": [
            "elggButton",
            "elggGallery",
            "elggIcon",
            "elggLayout",
            "elggMenu",
            "elggPage"
        ],
        "factories": [],
        "filters": [],
        "states": {
            "default": {
                "abstract": true,
                "controller": true,
                "template": true,
                "url": ""
            },
            "index": {
                "controller": true,
                "parent": "default",
                "template": true,
                "url": "/"
            },
            "login": {
                "controller": true,
                "parent": "default",
                "template": true,
                "url": "/login"
            }
        }
    });
});
