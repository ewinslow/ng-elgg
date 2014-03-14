define({
    restrict: 'A',
    /**
     * @ngInject
     */
    link: function($scope, $element, $attrs, $parse) {
        var expression = $parse($attrs['elggHasFocus']);
        
        $element.bind('focus', function() {
            expression.assign($scope, true);
        });

        $element.bind('blur', function() {
            expression.assign($scope, false);
        });

        $scope.$watch($attrs['elggHasFocus'], function(newValue) {
            if (newValue) {
                $element[0].focus();
            } else {
                $element[0].blur();
            }
        });
    }
});
