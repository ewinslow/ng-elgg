define(['css!./default.css'], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var css = $traceurRuntime.assertObject($__0).default;
  var $__default = {
    restrict: 'A',
    link: function($element, $attrs) {
      var style = $attrs[$traceurRuntime.toProperty('elggMenu')];
      $element.addClass('elgg-menu');
      $element.addClass('elgg-menu-' + style);
      require(['css!./' + style + '.css']);
    }
  };
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
