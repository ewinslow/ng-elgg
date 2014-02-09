define(function(require) {
    require('css!./default.css');
    
    return {
        restrict: 'A',
        // template: require('text!./template.ng'),
        // controller: require('./Controller'),
        link: function($element, $attrs) {
            var style = $attrs['elggMenu'];
            $element.addClass('elgg-menu');
            $element.addClass('elgg-menu-' + style);
            require(['css!./' + style + '.css'])
        }
    };
});
