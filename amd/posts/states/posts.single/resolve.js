define([], function() {
  "use strict";
  var $__default = {post: function($stateParams) {
      return {"id": $stateParams.post};
    }};
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
