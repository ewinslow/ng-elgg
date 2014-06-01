import ElggMenu from '../models/ElggMenu';
    
export default class {
    constructor() {
        this.menus_ = {};
    }
    
    getOrCreate(name) {
        var menu = this.menus_[name] || new ElggMenu();
        
        this.menus_[name] = menu;
        
        return menu;
    }
};