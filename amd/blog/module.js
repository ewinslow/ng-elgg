define(['./states/blog.add/main', './states/blog/main', 'ngRequire/createModule', './states/blog.edit/main', 'elgg/core/module', './states/blog.view/main'], function($__0,$__1,$__2,$__3,$__4,$__5) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {'default': $__1};
  if (!$__2 || !$__2.__esModule)
    $__2 = {'default': $__2};
  if (!$__3 || !$__3.__esModule)
    $__3 = {'default': $__3};
  if (!$__4 || !$__4.__esModule)
    $__4 = {'default': $__4};
  if (!$__5 || !$__5.__esModule)
    $__5 = {'default': $__5};
  var addBlogState = $traceurRuntime.assertObject($__0).default;
  var blogState = $traceurRuntime.assertObject($__1).default;
  var createModule = $traceurRuntime.assertObject($__2).default;
  var editBlogState = $traceurRuntime.assertObject($__3).default;
  var elggCore = $traceurRuntime.assertObject($__4).default;
  var viewBlogState = $traceurRuntime.assertObject($__5).default;
  var $__default = createModule('elgg/blog', [elggCore], {
    "directives": ["elggFormBlogSave"],
    "states": {
      "blog": blogState,
      "blog.add": addBlogState,
      "blog.edit": editBlogState,
      "blog.view": viewBlogState
    }
  });
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
