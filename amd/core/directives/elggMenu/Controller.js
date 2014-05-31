define([], function() {
  "use strict";
  var $__default = (($traceurRuntime.createClass)(function(elggMenus, menuName) {
    this.elggMenus = elggMenus;
    this.menuName = menuName;
  }, {getSections: function(menuName) {
      return this.elggMenus.get(this.menuName).getSections();
    }}, {}));
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
