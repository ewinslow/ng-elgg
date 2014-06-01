define([], function() {
  "use strict";
  var $__default = (($traceurRuntime.createClass)(function() {
    this.items_ = {};
  }, {
    register: function(itemName, callback) {
      $traceurRuntime.setProperty(this.items_, itemName, callback);
    },
    getSection: function(sectionName) {
      var items = [],
          key,
          item;
      for (key in this.items_) {
        item = this.items_[$traceurRuntime.toProperty(key)]();
        if (item.section == sectionName || (!item.section && sectionName == 'default')) {
          items.push(item);
        }
      }
      return items;
    }
  }, {}));
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
