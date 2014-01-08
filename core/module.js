define(function(require) {
    var createModule = require('ngRequire/createModule');
    var moduleConfig = require('json!elgg/core/module.json');
    var angular = require('angular');

    require('angular-snap');
    require('angular-translate');

    return createModule('elgg/core', [
        angular.module('pascalprecht.translate'),
        angular.module('snap'),
    ], moduleConfig);
});
