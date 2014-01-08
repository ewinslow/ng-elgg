define(function(require) {
    var newClass = require('evan/newClass');

    var Controller = newClass({
        /**
         * @ngInject
         */
        constructor: function($scope, blog, elgg) {
            $scope.blog = blog;

            $scope.deleteEntity = function(guid) {
                elgg.action('blog/delete', {
                    guid: guid
                }).then(function() {
                    window.history.back();
                });
            };
        }
    });

    Controller.$resolve = {
        blog: function(evanDatabase, $route) {
            return evanDatabase.getEntity($route.current.params.guid);
        }
    };

    return Controller;
});
