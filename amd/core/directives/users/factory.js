define([], function() {
  "use strict";
  define(function(require) {
    var $ = require('jquery');
    return function() {
      return {
        restrict: 'A',
        replace: true,
        template: require("text!./template.html"),
        controller: require('./Controller'),
        link: function($scope, element, attrs) {
          function isOutOfBounds(item, scrollable) {
            var itemBottom = item.offsetTop + item.offsetHeight;
            var scrollableBottom = scrollable.scrollTop + scrollable.offsetHeight;
            return item.offsetTop < scrollable.scrollTop || itemBottom > scrollableBottom;
          }
          $(element[0]).bind('keyup', function() {
            var tbody = $(element[0]).find('tbody')[0];
            var rows = $(element[0]).find('tr');
            var activeIndex = $scope.getActiveIndex();
            var activeRow = rows[activeIndex + 1];
            if (isOutOfBounds(activeRow, tbody)) {
              tbody.scrollTop = activeRow.offsetTop - tbody.offsetHeight / 2;
            }
          });
        }
      };
    };
  });
  return {};
});
