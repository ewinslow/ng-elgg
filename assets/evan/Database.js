define(function(require) {
    var newClass = require('evan/newClass');

    return newClass({
        /**
         * @ngInject
         */
        constructor: function($http, elgg) {
            this.$http = $http;
            this.elgg = elgg;
        },

        getObject: function(url, data) {
            return this.$http.get(this.elgg.normalize_url(url), {
                params: data
            }).then(function(result) {
                return result.data;
            });
        },

        getEntity: function(guid) {
            return this.getObject('/entity-json', {
                guid: guid
            });
        },

        getActivity: function() {
            return this.getObject('/activity-json');
        },

        getUsers: function(data) {
            return this.getObject('/users-json', data);
        },

        getPlugin: function(id) {
            return this.getObject('/admin/plugins-json', {
                id: id
            });
        },

        getAlbums: function() {
            return this.getObject('/albums-json');
        },
    });
});
