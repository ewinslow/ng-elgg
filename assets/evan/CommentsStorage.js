define(function() {
    /**
     * Provides a CRUD API for interacting with entity comments.
     * @constructor
     * @ngInject
     */
    function CommentsStorage(elgg, $q, $rootScope) {
        /** @private */
        this.elgg = elgg;

        /** @private */
        this.$q = $q;

        /** @private */
        this.$rootScope = $rootScope;
    }

    CommentsStorage.prototype.add = function(data) {
        var defer = this.$q.defer();

        this.elgg.action('comments/add', data).then(function(json) {
            defer.resolve(json.output);
        }, defer.reject.bind(defer)).always(function() {
            this.$rootScope.$apply();
        }.bind(this));

        return defer.promise;
    };


    CommentsStorage.prototype.remove = function(comment_guid) {
        return this.$q.reject("Not yet implemented: " + comment_guid);
    };


    /**
     * @return {CommentsCollection}
     */
    CommentsStorage.prototype.getForEntity = function(entity_guid) {
        var defer = this.$q.defer();

        var request = this.elgg.getJSON('/comments-json', {
            guid: entity_guid
        });
        request.then(function(comments) {
            defer.resolve(comments);
        }, function(reason) {
            defer.reject(reason);
        }).always(function() {
            this.$rootScope.$apply();
        }.bind(this));

        return defer.promise;
    };

    return CommentsStorage;
});
