define([], function() {
  "use strict";
  var $__default = {blogs: function($http) {
      return $http.get('api/blog.json').then(function(response) {
        return response.data;
      });
    }};
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
