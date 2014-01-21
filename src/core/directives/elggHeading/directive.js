define(function(require) {
    require('css!./styles.css')

    return {
        restrict: 'A',
        /**
         * @ngInject
         */
        link: function($element, $attrs) {
            $element.addClass('elgg-heading');
            $element.addClass('elgg-heading-' + $attrs['elggHeading']);
        }
    };
});
