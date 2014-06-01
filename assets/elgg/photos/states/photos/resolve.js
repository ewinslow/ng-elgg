export default {
    /**
     * @ngInject
     */
    photos: function($http) {
        return $http.get('api/photos.json').then(function(result) {
            return result.data;
        });
    },

    /**
     * All the translations needed by this route
     * @ngInject
     */
    i18n: function() {
        // TODO(ewinslow): Generate this dynamically by convention from JSON
        // files in e.g., ./_locales/{locale}.json
        return {
            addPhotos: function() {
                return 'Add photos';
            },
            allPhotos: function() {
                return 'All photos';
            }
        }
    }
};