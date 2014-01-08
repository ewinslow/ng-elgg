define(function(require) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            blog: '=',
        },
        controller: require('./Controller'),
        template: require('text!./template.ng')
    };
});
