define([], function() {
  "use strict";
  define(function(require) {
    var createDirective = require('ng/createDirective');
    return createDirective({
      restrict: 'E',
      replace: true,
      scope: {entity: '='},
      template: require("text!./template.ng"),
      link: function($scope, $element, $attrs) {
        var size = $attrs.size || 'small';
        $element.addClass('elgg-avatar-' + size);
      }
    });
  });
  return {};
});
