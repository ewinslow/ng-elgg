define([], function() {
  "use strict";
  var $__default = (($traceurRuntime.createClass)(function($scope, albums, evanUser, elgg) {
    this.albums = albums;
    this.user = evanUser;
    this.owner = elgg.page_owner;
  }, {}, {}));
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
