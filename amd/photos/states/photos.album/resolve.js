define([], function() {
  "use strict";
  var $__default = {album: function($http, $state) {
      return $http.get('api/albums.json').success(function(result) {
        return result.items[$traceurRuntime.toProperty($state.album - 1)];
      });
    }};
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
