define(function(require) {
    var newClass = require('evan/newClass');

    var Controller = newClass({
        /**
         * @ngInject
         */
        constructor: function($scope, blog) {
            $scope.blog = blog
        }
    });

    Controller.$resolve = {
        blog: function($route, evanDatabase) {
            return evanDatabase.getEntity($route.current.params.guid);
        },
    };

    return Controller;
});
