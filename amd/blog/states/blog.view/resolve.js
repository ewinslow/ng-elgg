define([], function() {
  "use strict";
  var $__default = {blog: function($http, $stateParams) {
      var url = 'api/blog/' + $stateParams.alias + '.json';
      return $http.get(url).then(function(response) {
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
