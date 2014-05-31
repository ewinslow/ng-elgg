define([], function() {
  "use strict";
  define(function() {
    return function($scope, river) {
      $scope.hasNextItems = function() {
        return !!collection.links.next;
      };
      $scope.loadNextItems = function() {
        collection.loadNextItems().always(this.$digest.bind(this));
      };
      $scope.isLoadingNextItems = function() {
        return !!collection.loadingNextItems;
      };
      $scope.getItems = function() {
        return collection.items;
      };
    };
  });
  return {};
});
