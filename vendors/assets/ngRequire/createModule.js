define(function(require) {
    var angular = require('angular');
    var uiRouter = angular.module('ui.router');
    require('angular-ui-router');
    var ngRequire = require('ngRequire');

    function createResolve(stateConfig, stateBase) {
        var resolve = {};

        (stateConfig.resolve || []).forEach(function(i) {
            // Set each resolve property to a wrapper callback that:
            //  1. lazy-loads the real resolve callback via AMD
            //  2. lazy-loads any dependencies of this callback
            //  3. resolves to the result of invoking the callback
            resolve[i] = function($require, $injector, $stateParams) {
                return $require.fetchAmdModule(stateBase + '/resolve').then(function(resolveCallbacks) {
                    return $require.fetchInjectableDeps(resolveCallbacks[i]).then(function() {
                        return $injector.invoke(resolveCallbacks[i], null, {
                            '$stateParams': $stateParams
                        });
                    });
                });
            };
        });

        // The template and controller are specified as AMD modules as well,
        // so load them and their dependencies before navigating to the route
        resolve.$deps = function($q, $require) {
            return $q.all([
                $require.fetchTemplateAndDeps(stateConfig.template),
                $require.fetchControllerAndDeps(stateConfig.controller),
            ]);
        };

        return resolve;
    }


    /**
     * @param {Object} stateConfig
     * @param {string} stateBase {{base}}/states/{{stateName}}
     *
     */
    function createStateConfig(stateConfig, stateBase) {
        // Assign defaults
        stateConfig.resolve = stateConfig.resolve || [];

        if (stateConfig.template === true) {
            stateConfig.template = stateBase + '/template.ng';
        }

        if (stateConfig.controller === true) {
            stateConfig.controller = stateBase + '/Controller';
        }

        // Register the state in an async-friendly way
        return {
            abstract: !! stateConfig.abstract,
            parent: stateConfig.parent || null,
            url: stateConfig.url,
            templateUrl: require.toUrl(stateConfig.template),
            controller: stateConfig.controller + " as " + (stateConfig.controllerAs || 'ctrl'),
            resolve: createResolve(stateConfig, stateBase)
        };
    }

    /**
     * @param {string} name
     * @param {!Array.<!angular.Module>} deps
     * @param {Object} $requireConfig
     *
     * @return {!angular.Module}
     */
    return function(name, deps, $requireConfig) {
        // Pass in module references, not just names
        deps = (deps || []).map(function(module) {
            if (!module || !module.name) {
                console.log(module, 'is not an angular module', new Error().stack);
            }

            return module.name;
        });

        deps.push(uiRouter.name);
        deps.push(ngRequire.name);

        return angular.module(name, deps).config(function($requireProvider) {
            // Merge in the lazy-loading configuration
            $requireProvider.mergeConfig($requireConfig, name);
        }).config(function($stateProvider) {
            // Register with state provider to handle router-based lazy loading
            var states = $requireConfig['states'] || {};
            Object.keys(states).forEach(function(stateName) {
                var stateBase = name + '/states/' + stateName;
                var stateConfig = createStateConfig(states[stateName], stateBase);
                $stateProvider.state(stateName, stateConfig);
            });
        });
    };
});
