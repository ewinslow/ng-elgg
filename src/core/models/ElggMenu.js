export default class {    
    constructor() {
        this.items_ = {};
    }
    
    register(itemName, callback) {
        this.items_[itemName] = callback;
    }
    
    getSection(sectionName) {
        var items = [], key, item;
        
        for (key in this.items_) {
            item = this.items_[key]();
            
            if (item.section == sectionName || 
                (!item.section && sectionName == 'default')) {
                items.push(item);
            }
        }
        
        return items;
    }
};
