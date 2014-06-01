/**
 * @ngInject
 */
export default class {
    constructor(elggMenus, menuName) {
        this.elggMenus = elggMenus;
        this.menuName = menuName;
    }

    getSections(menuName) {
        return this.elggMenus.get(this.menuName).getSections();
    }
};
