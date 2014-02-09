define(function(require) {
    /**
     * @ngInject
     */
    function Controller(elggMenus) {
        this.elggMenus = elggMenus;
    };

    Controller.prototype.getSections = function(menuName) {
        return this.elggMenus.get(menuName).getSections();
    };
    
    return Controller;
});
