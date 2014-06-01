define(['css!./styles.css'], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var css = $traceurRuntime.assertObject($__0).default;
  return {
    restrict: 'A',
    link: function($element, $attrs) {
      $element.addClass('elgg-heading');
      $element.addClass('elgg-heading-' + $attrs[$traceurRuntime.toProperty('elggHeading')]);
    }
  };
  return {};
});
