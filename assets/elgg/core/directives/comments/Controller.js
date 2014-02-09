define(function(require) {
    var angular = require('angular');
    var Collection = require('evan/Collection');
    var newClass = require('evan/newClass');

    return newClass({
        'extends': Collection,

        constructor: function($scope, evanUser, evanCommentsStorage, $http) {
            var data = {
                items: []
            };
            Collection.call(this, data, $http);

            $scope.ctrl = this;

            this.isCommenting = false;

            this.user = evanUser;

            /** @private */
            this.entity_guid = $scope.entity;

            /** @private */
            this.comments = evanCommentsStorage;

            this.comments.getForEntity($scope.entity).then(function(collection) {
                angular.extend(data, collection);
            });
        },

        submit: function() {
            var comment = {
                author: this.user,
                content: this.newComment
            };

            this.getItems().push(comment);

            this.comments.add({
                entity_guid: this.entity_guid,
                generic_comment: this.newComment
            }).then(function(commentEntity) {
                angular.extend(comment, commentEntity);
            }.bind(this), function() {
                this.remove(comment);
                this.newComment = comment.content;
            }.bind(this));

            this.newComment = '';
            this.isCommenting = false;
        },

        remove: function(comment) {
            var idx = this.getItems().indexOf(comment);

            if (idx > -1) {
                this.getItems().splice(idx, 1);
            }

            // this.comments.remove(comment);
        }
    });
});
