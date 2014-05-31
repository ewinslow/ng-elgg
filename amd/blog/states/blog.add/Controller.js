define([], function() {
  "use strict";
  var $__default = (($traceurRuntime.createClass)(function($scope, $routeParams) {
    $scope.ctrl = this;
    this.blog = $scope.blog = {
      guid: 0,
      container: {guid: $routeParams.guid},
      access_id: 0,
      status: 'draft',
      comments_on: 'On'
    };
  }, {}, {}));
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
