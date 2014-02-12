define(function(require) {
    require('css!./styles.css')

    return {
        restrict: 'A',
        /**
         * @ngInject
         */
        link: function($element, $attrs) {
            $element.addClass('elgg-icon');
            $element.addClass('elgg-icon-' + $attrs['elggIcon']);
        }
    };
});
