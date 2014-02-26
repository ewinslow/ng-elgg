define(function(require) {
    var ElggMenu = require('../models/ElggMenu');
    
    function ElggMenus() {
        this.menus_ = {};
    }
    
    ElggMenus.prototype.getOrCreate = function(name) {
        var menu = this.menus_[name] || new ElggMenu();
        
        this.menus_[name] = menu;
        
        return menu;
    };
    
    return ElggMenus;
});
