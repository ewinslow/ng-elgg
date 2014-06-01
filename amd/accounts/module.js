define(['ngRequire/createModule', 'elgg/core/module', './states/login/main', './states/validateemail/main', './states/forgotpassword/main'], function($__0,$__1,$__2,$__3,$__4) {
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
  var createModule = $traceurRuntime.assertObject($__0).default;
  var elggCore = $traceurRuntime.assertObject($__1).default;
  var loginState = $traceurRuntime.assertObject($__2).default;
  var validateEmailState = $traceurRuntime.assertObject($__3).default;
  var forgotPasswordState = $traceurRuntime.assertObject($__4).default;
  var $__default = createModule('elgg/accounts', [elggCore], {"states": {
      "login": loginState,
      "validateemail": validateEmailState,
      "forgotpassword": forgotPasswordState
    }});
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
