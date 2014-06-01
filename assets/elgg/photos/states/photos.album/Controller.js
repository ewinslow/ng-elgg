export default class {
    /**
     * @ngInject
     */
    constructor(album, $window, $location) {
        this.album = album;
        this.$window = $window;
        this.$location = $location;
    }

    deleteEntity(album) {
        if (this.$window.confirm('Are you sure?')) {
            this.elgg.action('photos/delete', {
                guid: album.guid,
            }).success(this.onDeleteSuccess_.bind(this));
        }
    }

    onDeleteSuccess_(result) {
        this.$location.url(result.forward_url.slice(this.elgg.config.wwwroot.length));
    }
};
