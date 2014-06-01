/**
 * This is the  responsible for lazy-loading and registering
 * all the others when needed. "When needed" is determined by the ngRequire
 * module, not this class.
 */
define(function(require) {
    var createDirective = require('ngRequire/createDirective');

    /**
     * @ngInject
     */
    function Require(config, $q, $injector, $compileProvider,
        $controllerProvider, $filterProvider, $provide) {
        this.config = config;
        this.$q = $q;
        this.$injector = $injector;
        this.$compileProvider = $compileProvider;
        this.$controllerProvider = $controllerProvider;
        this.$filterProvider = $filterProvider;
        this.$provide = $provide;
    }

    Require.prototype.fetchAmdModule = function(moduleName) {
        var defer = this.$q.defer();

        require([moduleName], function(module) {
            defer.resolve(module.__esModule ? module.default : module);
        });

        return defer.promise;
    };

    Require.prototype.fetchInjectableDeps = function(injectable) {
        var serviceNames = this.$injector.annotate(injectable);
        var services = serviceNames.map(this.fetchServiceAndDeps.bind(this));

        return this.$q.all(services);
    };

    Require.prototype.fetchServiceAndDeps = function(serviceName) {
        if (this.$injector.has(serviceName)) {
            return this.$q.when(true);
        }

        var valueModuleName = this.config['values'][serviceName];
        var ctorModuleName = this.config['services'][serviceName];
        var factoryModuleName = this.config['factories'][serviceName];

        if (valueModuleName) {
            return this.fetchAmdModule(valueModuleName).then(function(value) {
                this.$provide.value(serviceName, value);
            }.bind(this));
        } else if (ctorModuleName) {
            return this.fetchAmdModule(ctorModuleName).then(function(Ctor) {
                this.$provide.service(serviceName, Ctor);
                return this.fetchInjectableDeps(Ctor);
            }.bind(this));
        } else if (factoryModuleName) {
            return this.fetchAmdModule(factoryModuleName).then(function(factory) {
                this.$provide.factory(serviceName, factory);
                return this.fetchInjectableDeps(factory);
            }.bind(this));
        } else {
            return this.$q.when(true);
        }
    };

    Require.prototype.fetchControllerAndDeps = function(controllerName) {
        return this.fetchAmdModule(controllerName).then(function(ctrl) {
            this.$controllerProvider.register(controllerName, ctrl);
            return this.fetchInjectableDeps(ctrl);
        }.bind(this));
    };

    Require.prototype.fetchDirectiveAndDeps = function(directiveName) {
        var directiveModuleName = this.config['directives'][directiveName];

        return this.fetchAmdModule(directiveModuleName).then(function(directiveConfig) {
            var directive = createDirective(directiveConfig);

            this.$compileProvider.directive(directiveName, directive);

            return this.$q.all([
                this.fetchTemplateDeps(directive['$template']),
                this.fetchInjectableDeps(directive['$link']),
                this.fetchInjectableDeps(directive['$controller']),
            ]);
        }.bind(this));
    };

    Require.prototype.fetchFilterAndDeps = function(filterName) {
        var filterModuleName = this.config['filters'][filterName];

        return this.fetchAmdModule(filterModuleName).then(function(filter) {
            this.$filterProvider.register(filterName, filter);
            return this.fetchInjectableDeps(filter);
        }.bind(this));
    };


    Require.prototype.fetchTemplateAndDeps = function(templateModuleName) {
        return this.fetchAmdModule('text!' + templateModuleName).then(function(template) {
            return this.fetchTemplateDeps(template);
        }.bind(this));
    };


    Require.prototype.fetchTemplateDeps = function(template) {
        var directiveNames = this.findDirectives(template);
        var directives = directiveNames.map(this.fetchDirectiveAndDeps.bind(this));

        var filterNames = this.findFilters(template);
        var filters = filterNames.map(this.fetchFilterAndDeps.bind(this));

        return this.$q.all(directives.concat(filters));
    };


    /**
     * Returns the list of directive names that are present
     * in the given HTML.
     *
     * @param {string} template
     *
     * @return {!Array.<string>}
     */
    Require.prototype.findDirectives = function(template) {
        function upperCaseToDash($1) {
            return "-" + $1.toLowerCase();
        }

        return Object.keys(this.config['directives']).filter(function(directiveName) {
            var normalizedDirectiveName = directiveName.replace(/([A-Z])/g, upperCaseToDash);
            return template.indexOf(normalizedDirectiveName) !== -1;
        });
    };


    /**
     * Returns an array of the filter names that are present
     * in the given HTML.
     *
     * @param {string} template
     *
     * @return {!Array.<string>}
     */
    Require.prototype.findFilters = function(template) {
        return Object.keys(this.config['filters']).filter(function(filterName) {
            return template.indexOf(filterName) !== -1;
        });
    };

    return Require;
});
