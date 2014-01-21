define(function(require) {
    /**
     * @ngInject
     */
    function Controller($scope, blog) {
        $scope.blog = blog
    }

    Controller.$resolve = {
        blog: function($route, evanDatabase) {
            return evanDatabase.getEntity($route.current.params.guid);
        },
    };

    return Controller;
});
