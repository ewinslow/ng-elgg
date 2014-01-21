// <script>
define(function(require) {
    return function() {
        return {
            restrict: 'A',
            replace: true,
            template: require.toUrl("./template.html"),
            controller: require('./Controller'),
            scope: {
                items: '='
            }
        };
    };
});
