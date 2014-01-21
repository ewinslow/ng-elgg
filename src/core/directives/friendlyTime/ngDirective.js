define(function(require) {

    // require('css!./styles');

    var moment = require('moment');

    return function() {
        return {
            restrict: 'A',
            link: function($scope, $element, $attrs) {
                var datetime = moment($attrs.datetime);
                if (datetime) {
                    $element.html(datetime.fromNow());
                    $element.attr('title', datetime.format('LLLL'));
                }

                $element.addClass('elgg-timestamp');
                // TODO(ewinslow): Auto-updates
            }
        };
    };
});
