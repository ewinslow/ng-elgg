define([], function() {
  "use strict";
  define(function(require) {
    return function() {
      return {
        restrict: 'A',
        replace: true,
        scope: {object: '='},
        templateUrl: require.toUrl("./template.html"),
        controller: require('./Controller'),
        controllerAs: 'ctrl'
      };
    };
  });
  return {};
});
