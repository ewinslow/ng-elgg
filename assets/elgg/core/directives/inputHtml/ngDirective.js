define(function(require) {
    /**
     * @ngInject
     */
    return function() {
        return {
            require: '?ngModel',
            link: function($scope, $elm, $attrs, ngModel) {
                require(['ckeditor'], function(CKEDITOR) {
                    var ck = CKEDITOR.replace($elm[0]);

                    if (!ngModel) {
                        return;
                    }

                    function update() {
                        return $scope.$apply(function() {
                            return ngModel.$setViewValue(ck.getData());
                        });
                    }

                    ck.on('key', update);
                    ck.on('focus', update);
                    ck.on('blur', update);

                    ngModel.$render = function() {
                        return ck.setData(ngModel.$viewValue || '');
                    };
                });
            } // link
        };
    };
}); // define
