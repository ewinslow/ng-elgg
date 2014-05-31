define(["./Controller", "./template.ng"], function($__0,$__1) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {'default': $__1};
  var Controller = $traceurRuntime.assertObject($__0).default;
  var template = $traceurRuntime.assertObject($__1).default;
  var $__default = {
    restrict: 'E',
    replace: true,
    scope: {blog: '='},
    controller: Controller,
    controllerAs: 'ctrl',
    template: template
  };
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
