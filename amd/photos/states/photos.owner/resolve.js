define([], function() {
  "use strict";
  var $__default = {albums: function(evanDatabase, $route) {
      return evanDatabase.getAlbums({alias: $route.current.params.alias});
    }};
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
