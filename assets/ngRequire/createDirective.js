/**
 * A factory function that returns an annotated directive function that is lazy-
 * load-friendly. Also makes the "link" function injectable.
 *
 * NB: No effort was made to support the "compile" directive option
 *
 * Also injects $scope, $element, $attrs, and $ctrls as local injections.
 */
define(function() {

    /**
     *
     */
    return function createDirective(config) {
        // Makes createDirective idempotent
        if (typeof config === 'function') {
            return config;
        }

        var injectedLink = config.link || function() {};

        function directive($injector) {
            config.link = function($scope, $element, $attrs, $ctrls) {
                $injector.invoke(injectedLink, null, {
                    '$scope': $scope,
                    '$element': $element,
                    '$attrs': $attrs,
                    '$ctrls': $ctrls
                });
            };

            return config;
        }

        // We store these on the factory so we can easily grab them and
        // parse for more dependencies that need to be loaded (injected
        // services from $link and $controller; filters and directives
        // from $template)
        directive['$link'] = injectedLink;
        directive['$template'] = config.template || '';
        directive['$controller'] = config.controller || function() {};

        return directive;
    };
});
