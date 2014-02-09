define(function(require) {
    var moment = require('moment');

    /**
     * @ngInject
     */
    return function() {
        return function(dateString) {
            return moment(new Date(dateString)).calendar();
        };
    };
});
