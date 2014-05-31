define(['ngRequire/createModule', 'elgg/core/module'], function($__0,$__1) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {'default': $__1};
  var createModule = $traceurRuntime.assertObject($__0).default;
  var elggCore = $traceurRuntime.assertObject($__1).default;
  var deps = [elggCore];
  var $__default = createModule('elgg/photos', deps, {"states": {
      "photos": {
        "controller": true,
        "parent": "default",
        "resolve": ["photos", "i18n"],
        "template": true,
        "url": "/photos"
      },
      "photos.add": {
        "controller": true,
        "parent": "default",
        "template": true,
        "url": "/photos/add/:container"
      },
      "photos.album": {
        "controller": true,
        "parent": "default",
        "resolve": ["album"],
        "template": true,
        "url": "/photos/albums/:album"
      },
      "photos.image": {
        "controller": true,
        "parent": "default",
        "resolve": ["image"],
        "template": true,
        "url": "/photos/image/:image"
      }
    }});
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
