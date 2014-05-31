define([], function() {
  "use strict";
  var $__default = (($traceurRuntime.createClass)(function($stateParams) {
    this.album = {
      guid: 0,
      container: {guid: $stateParams.container},
      access_id: 0
    };
  }, {submit: function() {}}, {}));
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
