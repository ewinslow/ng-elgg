define([], function() {
  "use strict";
  var $__default = {
    photos: function($http) {
      return $http.get('api/photos.json').then(function(result) {
        return result.data;
      });
    },
    i18n: function() {
      return {
        addPhotos: function() {
          return 'Add photos';
        },
        allPhotos: function() {
          return 'All photos';
        }
      };
    }
  };
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
