define(function(require) {
    /**
     * @ngInject
     */
    function Controller($scope) {
        $scope.ctrl = this;

        this.activity = $scope.activity;
    }
    
    Controller.prototype = {
        constructor: Controller,
        getMediaAttachment: function() {
            var index = -1;

            this.activity.object.attachments.forEach(function(item, idx) {
                if (item.fullImage) {
                    index = idx;
                }
            });

            if (index == -1) {
                return null;
            }

            return this.activity.object.attachments[index];
        },

        getMediaAttachments: function() {
            return this.activity.object.attachments.filter(function(item) {
                return !!item.image;
            });
        },
    };
    
    return Controller;
});
