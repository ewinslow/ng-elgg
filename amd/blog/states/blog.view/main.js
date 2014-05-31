define(['css!./styles.css'], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  $__0;
  var $__default = {
    "controller": true,
    "parent": "default",
    "template": true,
    "url": "/blog/:alias",
    "resolve": ["blog"]
  };
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
