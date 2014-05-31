define(['css!./styles.css'], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var css = $traceurRuntime.assertObject($__0).default;
  var styles = ['photos'];
  var $__default = {
    restrict: 'A',
    link: function($element, $attrs) {
      $element.addClass('elgg-gallery');
      $attrs.$observe('elggGallery', function(style) {
        styles.forEach(function(oldStyle) {
          $element.removeClass('elgg-gallery-' + oldStyle);
        });
        if (styles.indexOf(style) >= 0) {
          $element.addClass('elgg-gallery-' + style);
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
