define([], function() {
  "use strict";
  define(function(require) {
    return function() {
      return {
        restrict: 'A',
        replace: true,
        templateUrl: require.toUrl("./template.html"),
        controller: require('./Controller'),
        scope: {'activity': '='}
      };
    };
  });
  return {};
});
