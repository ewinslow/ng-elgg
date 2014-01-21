define(function(require) {
    require('css!./styles.css')

    var styles = [
        'photos'
    ];

    return {
        restrict: 'A',
        /**
         * @ngInject
         */
        link: function($element, $attrs) {
            $element.addClass('elgg-gallery');

            $attrs.$observe('elggGallery', function(style) {

                styles.forEach(function(oldStyle) {
                    $element.removeClass('elgg-gallery-' + oldStyle);
                })

                if (styles.indexOf(style) >= 0) {
                    $element.addClass('elgg-gallery-' + style);
                }
            });
        }
    };
});
