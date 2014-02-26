define(function() {
    
    function ElggMenu() {
        this.items_ = {};
    }
    
    ElggMenu.prototype.register = function(itemName, callback) {
        this.items_[itemName] = callback;
    };
    
    ElggMenu.prototype.getSection = function(sectionName) {
        var items = [], key, item;
        
        for (key in this.items_) {
            item = this.items_[key]();
            
            if (item.section == sectionName || 
                (!item.section && sectionName == 'default')) {
                items.push(item);
            }
        }
        
        return items;
    };
    
    return ElggMenu;
});
