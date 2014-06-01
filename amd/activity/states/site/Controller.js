define(['evan/Collection'], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var Collection = $traceurRuntime.assertObject($__0).default;
  var $__default = (function($__super) {
    var Controller = function Controller($scope, river, $http, evanUser) {
      $traceurRuntime.superCall(this, Controller.prototype, "constructor", [river, $http]);
      $scope.ctrl = this;
      $scope.user = evanUser;
    };
    return ($traceurRuntime.createClass)(Controller, {}, {}, $__super);
  }(Collection));
  Controller.$resolve = {river: function(evanDatabase) {
      return evanDatabase.getActivity();
    }};
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
