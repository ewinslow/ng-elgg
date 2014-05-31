define(['moment'], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var moment = $traceurRuntime.assertObject($__0).default;
  var $__default = function() {
    return function(dateString) {
      return moment(new Date(dateString)).fromNow();
    };
  };
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
