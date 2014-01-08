define(function(require) {
    var newClass = require('evan/newClass');

    return newClass({
        /**
         * @ngInject
         */
        constructor: function(elggMenus) {
            this.elggMenus = elggMenus;
        },

        getSections: function(menuName) {
            return this.elggMenus.get(menuName).getSections();
        }
    });
});
