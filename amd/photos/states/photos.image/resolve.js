define([], function() {
  "use strict";
  var $__default = {image: function($http, $stateParams) {
      return $http.get('api/photos/' + $stateParams.image + '.json').then(function(result) {
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
