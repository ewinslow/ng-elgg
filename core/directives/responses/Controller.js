define(function(require) {
    var $ = require('jquery');
    var Collection = require('evan/Collection');
    var newClass = require('evan/newClass');


    return newClass({
        constructor: function($scope, elgg, evanUser) {
            // Likes-related //
            $scope.user = evanUser;

            $scope.getLikes = function(limit) {
                return this.object.likes.items.slice(0, limit);
            };

            var unlike_ = function() {
                if (this.object.hasLiked) {
                    this.object.likes.totalItems--;
                }

                var index = Collection.prototype.indexOfEntity.call(this.object.likes, this.user);
                if (index >= 0) {
                    this.object.likes.items.splice(index, 1);
                }

                this.object.hasLiked = false;
            }.bind($scope);

            $scope.unlike = function() {
                unlike_();
                elgg.action('likes/delete', {
                    data: {
                        guid: this.object.guid
                    },
                    error: like_
                });

            };

            var like_ = function() {
                if (!this.hasLiked) {
                    this.object.likes.totalItems++;
                }

                if (Collection.prototype.indexOfEntity.call(this.object.likes, this.user) == -1) {
                    this.object.likes.items.unshift(this.user);
                }

                this.object.hasLiked = true;
            }.bind($scope);

            $scope.like = function() {
                like_();
                elgg.action('likes/add', {
                    data: {
                        'guid': this.object.guid
                    },
                    error: unlike_
                });
            };

            var remainingLikes = function() {
                return this.object.likes.totalItems - this.object.likes.items.length;
            }.bind($scope);

            $scope.toggleLikesDrawer = function() {
                this.likesDrawerIsOpen = !this.likesDrawerIsOpen;

                if (remainingLikes() > 0) {
                    this.loadingLikes = true;
                    elgg.getJSON('/likes-json', {
                        data: {
                            limit: 0,
                            guid: this.object.guid
                        },
                        success: function(json) {
                            $scope.object.likes = json;
                        },
                        complete: function() {
                            $scope.loadingLikes = false;
                            $scope.$digest();
                        }
                    });
                }
            };

            // Comments-related //

            $scope.startCommenting = function() {
                this.likesDrawerIsOpen = false;
                this.commenting = true;
            };

            $scope.submitComment = function() {
                var newComment = {
                    content: this.newComment,
                    author: this.user,
                    published: moment().format(),
                };

                this.object.comments.items.push(newComment);
                this.object.comments.totalItems++;

                elgg.action('comments/add', {
                    data: {
                        entity_guid: this.object.guid,
                        generic_comment: this.newComment
                    },
                    success: function(json) {
                        $.extend(newComment, json.output);
                    },
                    complete: function() {
                        $scope.$digest();
                    }
                });

                this.resetComment();
            };

            $scope.resetComment = function() {
                this.newComment = '';
                this.commenting = false;
                this.doneCommenting = true;
            };

            $scope.$on('comments/delete', function(e) {
                $scope.deleteComment(e.targetScope.comment);
            });

            var removeComment = function(comment) {
                var idx = Collection.prototype.indexOfAnnotation.call(this.object.comments, comment);
                if (idx >= 0) {
                    this.object.comments.items.splice(idx, 1);
                    this.object.comments.totalItems--;
                }
            }.bind($scope);

            $scope.deleteComment = function(comment) {
                comment.deleting = true;

                elgg.action('comments/delete', {
                    'annotation_id': comment.annotation_id
                }).then(function(json) {
                    if (!json.system_messages.error.length) {
                        removeComment(comment);
                    }
                }).done(function() {
                    comment.deleting = false;
                    $scope.$digest();
                });
            };

            $scope.remainingItems = function() {
                return this.object.comments.totalItems - this.object.comments.items.length;
            };

            $scope.loadOlderItems = function() {
                this.loadingOlderItems = true;
                elgg.getJSON('/comments-json', {
                    guid: this.object.guid,
                    created_before: Collection.prototype.getOldestPublishedTime.call(this.object.comments),
                }).then(function(newComments) {
                    newComments.items.forEach(function(comment) {
                        $scope.object.comments.items.push(comment);
                    });
                    $scope.loadingOlderItems = false;
                }).done(function() {
                    $scope.loadingOlderItems = false;
                    $scope.$digest();
                });

            };
        }
    });
});
