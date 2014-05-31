define(['ngRequire/createModule', 'angular', 'angular-sanitize', 'angular-snap', 'angular-translate', 'angularytics'], function($__0,$__1,$__2,$__3,$__4,$__5) {
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
  var createModule = $traceurRuntime.assertObject($__0).default;
  var angular = $traceurRuntime.assertObject($__1).default;
  var $sanitize = $traceurRuntime.assertObject($__2).default;
  var $snap = $traceurRuntime.assertObject($__3).default;
  var $translate = $traceurRuntime.assertObject($__4).default;
  var angularytics = $traceurRuntime.assertObject($__5).default;
  var $__default = createModule('elgg/core', [angular.module('pascalprecht.translate'), angular.module('snap'), angular.module('ngSanitize'), angular.module('angularytics')], {
    "directives": ["elggButton", "elggGallery", "elggGrid", "elggHeading", "elggIcon", "elggFormField", "elggLayout", "elggMenu", "elggPage"],
    "factories": [],
    "filters": [],
    "services": ["elggMenus"],
    "states": {
      "settings.account": require('./states/settings.account/main'),
      "default": require('./states/default/main'),
      "index": require('./states/index/main')
    }
  }).config(function configureAngularytics(AngularyticsProvider) {
    AngularyticsProvider.setEventHandlers(['GoogleUniversal', 'Console']);
  }).run(function loadAndConfigureGoogleAnalytics(profile) {
    var google = profile.google || {};
    var analytics = google.analytics || {};
    if (!analytics.code || !profile.baseUrl) {
      return;
    }
    (function(i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments);
      }, i[r].l = 1 * new Date();
      a = s.createElement(o), m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
      a = s.createElement('a');
      a.href = profile.baseUrl;
      i[r]('set', 'forceSSL', true);
      i[r]('create', analytics.code, {
        'cookieDomain': a.host,
        'cookiePath': a.pathname
      });
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  }).run(function trackStateChangeEvents($rootScope, Angularytics) {
    var $stateChangeStartTime;
    $rootScope.$on('$stateChangeStart', function setStartTime() {
      $stateChangeStartTime = Date.now();
    });
    $rootScope.$on('$stateChangeSuccess', function trackSuccess(event, toState) {
      Angularytics.trackEvent('$stateChange', 'success', toState.name, Date.now() - $stateChangeStartTime, true);
    });
    $rootScope.$on('$stateChangeError', function trackError(event, toState) {
      Angularytics.trackEvent('$stateChange', 'error', toState.name, Date.now() - $stateChangeStartTime, true);
    });
  });
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
