define([], function() {
  "use strict";
  define(function() {
    return {post: function($stateParams) {
        return {"id": $stateParams.post};
      }};
  });
  return {};
});
