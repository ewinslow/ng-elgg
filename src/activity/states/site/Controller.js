define(function(require) {
    var newClass = require('evan/newClass');
    var Collection = require('evan/Collection');

    var Controller = newClass({
        'extends': Collection,
        /**
         * @ngInject
         */
        constructor: function($scope, river, $http, evanUser) {
            Collection.call(this, river, $http);

            $scope.ctrl = this;
            $scope.user = evanUser;
        }
    });

    Controller.$resolve = {
        river: function(evanDatabase) {
            return evanDatabase.getActivity();
        }
    };

    return Controller;
});
