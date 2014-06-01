define(['ngRequire/createModule', 'elgg/core/module'], function($__0,$__1) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {'default': $__1};
  var createModule = $traceurRuntime.assertObject($__0).default;
  var elggCore = $traceurRuntime.assertObject($__1).default;
  var $__default = createModule('elgg/events', [elggCore], {"states": {
      "events": {
        "controller": true,
        "parent": "default",
        "resolve": ["events"],
        "template": true,
        "url": "/events"
      },
      "events.single": {
        "controller": true,
        "resolve": ["event"],
        "template": true,
        "url": "/:event"
      }
    }});
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
