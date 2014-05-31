define(['../models/ElggMenu'], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var ElggMenu = $traceurRuntime.assertObject($__0).default;
  var $__default = (($traceurRuntime.createClass)(function() {
    this.menus_ = {};
  }, {getOrCreate: function(name) {
      var menu = this.menus_[name] || new ElggMenu();
      this.menus_[name] = menu;
      return menu;
    }}, {}));
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
