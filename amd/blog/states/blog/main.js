define([], function() {
  "use strict";
  var $__default = {
    "controller": true,
    "parent": "default",
    "template": true,
    "url": "/blog",
    "resolve": ["blogs"]
  };
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
