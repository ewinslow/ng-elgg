define([], function() {
  "use strict";
  define(function() {
    return function(post) {
      this.post = post;
    };
  });
  return {};
});
