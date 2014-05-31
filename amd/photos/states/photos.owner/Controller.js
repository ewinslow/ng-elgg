define([], function() {
  "use strict";
  define(function() {
    return function Controller($scope, albums, evanUser, elgg) {
      this.albums = albums;
      this.user = evanUser;
      this.owner = elgg.page_owner;
    };
  });
  return {};
});
