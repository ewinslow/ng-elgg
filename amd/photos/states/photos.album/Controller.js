define([], function() {
  "use strict";
  define(function(require) {
    function Controller(album, $window, $location) {
      this.album = album;
      this.$window = $window;
      this.$location = $location;
    }
    Controller.prototype = {
      constructor: Controller,
      deleteEntity: function(album) {
        if (this.$window.confirm('Are you sure?')) {
          this.elgg.action('photos/delete', {guid: album.guid}).success(this.onDeleteSuccess_.bind(this));
        }
      },
      onDeleteSuccess_: function(result) {
        this.$location.url(result.forward_url.slice(this.elgg.config.wwwroot.length));
      }
    };
    return Controller;
  });
  return {};
});
