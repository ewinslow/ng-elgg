define(['css!./styles.css'], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var css = $traceurRuntime.assertObject($__0).default;
  var styles = ['action', 'cancel', 'delete', 'dropdown', 'submit', 'special', 'clear'];
  var $__default = {
    restrict: 'A',
    link: function($element, $attrs) {
      $element.addClass('elgg-button');
      $attrs.$observe('elggButton', function(style) {
        styles.forEach(function(oldStyle) {
          $element.removeClass('elgg-button-' + oldStyle);
        });
        if (styles.indexOf(style) >= 0) {
          $element.addClass('elgg-button-' + style);
        }
      });
    }
  };
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
