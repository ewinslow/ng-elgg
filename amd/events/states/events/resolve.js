define([], function() {
  "use strict";
  var $__default = {events: function($http) {
      return $http.get('api/events.json').then(function(result) {
        return result.data;
      });
    }};
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
