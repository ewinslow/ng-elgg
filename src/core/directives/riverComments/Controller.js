define(function(require) {
    var newClass = require('evan/newClass');

    return newClass({
        /**
         * @ngInject
         */
        constructor: function($scope) {
            $scope.ctrl = this;

            this.comment = $scope.comment;
            this.hovering = false;
            this.deleting = false;
            this.$scope = $scope;
        },

        'delete': function() {
            this.$scope.$emit('comments/delete');
        }
    });
});
