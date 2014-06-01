define([], function() {
  "use strict";
  define(function() {
    return function($stateParams) {
      this.email = $stateParams.email;
    };
  });
  return {};
});
