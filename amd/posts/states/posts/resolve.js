define([], function() {
  "use strict";
  var $__default = {'posts': function($http) {
      return $http.get('api/posts.json').then(function(result) {
        return result.data;
      });
    }};
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
