define(function(require) {
    var angular = require('angular');
    var uiRouter = angular.module('ui.router');
    require('angular-ui-router');
    var RequireProvider = require('ngRequire/RequireProvider');

    return angular.module('ngRequire', [
        uiRouter.name
    ]).provider('$require', RequireProvider).config(function(
        $stateProvider,
        $controllerProvider,
        $compileProvider,
        $provide,
        $requireProvider) {

        $requireProvider.$stateProvider = $stateProvider;
        $requireProvider.$controllerProvider = $controllerProvider;
        $requireProvider.$compileProvider = $compileProvider;
        $requireProvider.$provide = $provide;
    }).config(function($urlRouterProvider) {
        $urlRouterProvider.when('', '/');
    });

});
