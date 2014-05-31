define([], function() {
  "use strict";
  var $__default = function(Restangular) {
    return Restangular.withConfig(function(config) {
      config.setBaseUrl('api');
      config.setRequestSuffix('.json');
    });
  };
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
