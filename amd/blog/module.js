define(['ngRequire/createModule', 'elgg/core/module'], function($__0,$__1) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {'default': $__1};
  var createModule = $traceurRuntime.assertObject($__0).default;
  var elggCore = $traceurRuntime.assertObject($__1).default;
  var $__default = createModule('elgg/blog', [elggCore], {
    "directives": ["elggFormBlogSave"],
    "states": {
      "blog": require('./states/blog/main'),
      "blog.add": require('./states/blog.add/main'),
      "blog.edit": require('./states/blog.edit/main'),
      "blog.view": require('./states/blog.view/main')
    }
  });
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
