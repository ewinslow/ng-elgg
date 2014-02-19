define(function(require) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            blog: '=',
        },
        controller: require('./Controller'),
        controllerAs: 'ctrl',
        template: require('text!./template.ng')
    };
});
