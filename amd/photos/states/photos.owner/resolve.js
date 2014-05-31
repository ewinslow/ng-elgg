define([], function() {
  "use strict";
  define(function() {
    return {albums: function(evanDatabase, $route) {
        return evanDatabase.getAlbums({alias: $route.current.params.alias});
      }};
  });
  return {};
});
