define([], function() {
  "use strict";
  define(function() {
    return {album: function($http, $state) {
        return $http.get('api/albums.json').success(function(result) {
          return result.items[$state.album - 1];
        });
      }};
  });
  return {};
});
