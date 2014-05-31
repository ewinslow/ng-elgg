define([], function() {
  "use strict";
  define(function() {
    return function($timeout, $parse) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          element.bind('focus', function() {
            $parse(attrs.elggFocusModel).assign(scope, true);
          });
          element.bind('blur', function() {
            $parse(attrs.elggFocusModel).assign(scope, false);
          });
          scope.$watch(attrs.elggFocusModel, function(newValue, oldValue) {
            if (newValue == oldValue) {
              return;
            }
            $timeout(function() {
              if (newValue) {
                element.focus();
              } else {
                element.blur();
              }
            }, 0);
          });
        }
      };
    };
  });
  return {};
});
