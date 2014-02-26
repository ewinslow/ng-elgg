define(function(require) {
    var Require = require('./Require');

    /**
     * @ngInject
     */
    function RequireProvider() {
        this.config = {
            directives: {},
            services: {},
            factories: {},
            values: {},
            filters: {}
        };

        // These are set in the config phase
        this.$compileProvider = null;
        this.$controllerProvider = null;
        this.$filterProvider = null;
        this.$provide = null;
    }

    RequireProvider.prototype.mergeConfig = function(config, base) {
        this.mergeDirectivesConfig_(config['directives'], base);
        this.mergeFiltersConfig_(config['filters'], base);

        this.mergeServicesConfig_('values', config, base);
        this.mergeServicesConfig_('services', config, base);
        this.mergeServicesConfig_('factories', config, base);
    };

    RequireProvider.prototype.normalizeConfig_ = function(config) {
        var normalizedConfig = {};

        if (Array.isArray(config)) {
            config.forEach(function(name) {
                normalizedConfig[name] = true;
            });
        } else {
            normalizedConfig = config || {};
        }

        return normalizedConfig;
    };


    /**
     * {
     *   "filters": ["one", "two"]
     * }
     *
     * is shorthand for
     *
     * {
     *   "filters": {
     *     "one": true,
     *     "two": true
     *   }
     * }
     *
     * is shorthand for
     *
     * {
     *   "filters": {
     *     "one": "{{base}}/filters/one",
     *     "two": "{{base}}/filters/two"
     *   }
     * }
     */
    RequireProvider.prototype.mergeFiltersConfig_ = function(config, base) {
        var filtersConfig = this.normalizeConfig_(config);

        Object.keys(filtersConfig).forEach(function(name) {
            var module = filtersConfig[name];
            if (module === true) {
                module = base + '/filters/' + name;
            }

            this.config['filters'][name] = module;
        }.bind(this));
    };


    /**
     *
     * @param {Object} config
     *
     * {
     *   "directives": ["one", "two"]
     * }
     *
     * is shorthand for
     *
     * {
     *   "directives": {
     *     "one": true,
     *     "two": true
     *   }
     * }
     *
     * is shorthand for
     *
     * {
     *   "directives": {
     *     "one": "{{base}}/directives/one/directive",
     *     "two": "{{base}}/directives/two/directive"
     *   }
     * }
     *
     * @param {string} base An AMD namespace for the default modules.
     *
     */
    RequireProvider.prototype.mergeDirectivesConfig_ = function(config, base) {
        var directivesConfig = this.normalizeConfig_(config);

        Object.keys(directivesConfig).forEach(function(name) {
            var module = directivesConfig[name];
            if (module === true) {
                module = base + '/directives/' + name + '/directive';
            }

            this.config['directives'][name] = module;
        }.bind(this));
    };

    /**
     * @param {string} type "services," "factories," or "values"
     * @param {Object} config
     *
     * {
     *   "services": ["serviceName"],
     *   "factories": ["serviceName"],
     *   "values": ["serviceName"]
     * }
     *
     * is shorthand for
     *
     * {
     *   "services": { "serviceName": true },
     *   "factories": { "serviceName": true },
     *   "values": { "serviceName": true }
     * }
     *
     * is shorthand for
     *
     * {
     *   "services": { "serviceName": "{{base}}/services/ServiceName" },
     *   "factories": { "serviceName": "{{base}}/factories/serviceName" },
     *   "values": { "serviceName": "{{base}}/values/serviceName" }
     * }
     *
     * NB: The "services" option capitalizes ServiceName, since it is meant
     *     to be a constructor function (i.e. a class).
     *
     * NB: Providers and constants are not supported for lazy-loading. Register
     *     those in the traditional, synchronous way.
     *
     * @param {string} base An AMD namespace for the default modules
     */
    RequireProvider.prototype.mergeServicesConfig_ = function(type, config, base) {
        var servicesConfig = this.normalizeConfig_(config[type]);

        Object.keys(servicesConfig).forEach(function(name) {
            this.config['values'][name] = false;
            this.config['services'][name] = false;
            this.config['factories'][name] = false;

            // Capitalize service names ('someService' => 'SomeService')
            var moduleName = type !== 'services' ? name :
                name.charAt(0).toUpperCase() + name.slice(1)

            var module = servicesConfig[name];
            if (module === true) {
                module = base + '/' + type + '/' + moduleName;
            }

            this.config[type][name] = module;
        }.bind(this));
    };

    /**
     * @ngInject
     */
    RequireProvider.prototype.$get = function($q, $injector) {
        return new Require(this.config, $q, $injector, this.$compileProvider,
            this.$controllerProvider, this.$filterProvider, this.$provide);
    };

    return RequireProvider;
});
