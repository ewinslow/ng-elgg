define(function(require) {
    return function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                entity: '='
            },
            template: require("text!./template.html"),
            controller: require('./Controller')
        };
    };
});
