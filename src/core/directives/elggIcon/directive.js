import css from 'css!./styles.css';

export default {
    restrict: 'A',
    /**
     * @ngInject
     */
    link: function($element, $attrs) {
        $element.addClass('elgg-icon');
        $element.addClass('elgg-icon-' + $attrs['elggIcon']);
    }
};
