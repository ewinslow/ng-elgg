define([], function() {
  "use strict";
  define({
    restrict: 'A',
    link: function($scope, $element, $attrs, $parse) {
      var expression = $parse($attrs[$traceurRuntime.toProperty('elggHasFocus')]);
      $element.bind('focus', function() {
        expression.assign($scope, true);
      });
      $element.bind('blur', function() {
        expression.assign($scope, false);
      });
      $scope.$watch($attrs[$traceurRuntime.toProperty('elggHasFocus')], function(newValue) {
        if (newValue) {
          $element[0].focus();
        } else {
          $element[0].blur();
        }
      });
    }
  });
  return {};
});
