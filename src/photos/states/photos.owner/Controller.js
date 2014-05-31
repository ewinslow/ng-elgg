export default class {
    /**
     * @ngInject
     */
    constructor($scope, albums, evanUser, elgg) {
        this.albums = albums;
        this.user = evanUser;
        this.owner = elgg.page_owner;
    }
};