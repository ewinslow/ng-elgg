define([], function() {
  "use strict";
  define(function() {
    return function(posts) {
      this.posts = posts;
    };
  });
  return {};
});
