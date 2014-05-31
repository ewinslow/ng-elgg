define([], function() {
  "use strict";
  var $__default = {
    "controller": true,
    "parent": "default",
    "template": true,
    "url": "/blog/:alias/edit",
    "resolve": ["blog"]
  };
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
