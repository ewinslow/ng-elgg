import createModule from 'ngRequire/createModule';
import angular from 'angular';
import $sanitize from 'angular-sanitize';
import $snap from 'angular-snap';
import $translate from 'angular-translate';
import angularytics from 'angularytics';
import accountSettingsState from './states/settings.account/main';
import defaultState from './states/default/main';
import indexState from './states/index/main';

export default createModule('elgg/core', [
    angular.module('pascalprecht.translate'),
    angular.module('snap'),
    angular.module('ngSanitize'),
    angular.module('angularytics'),
], {
    "directives": [
        "elggButton",
        "elggGallery",
        "elggGrid",
        "elggHeading",
        "elggIcon",
        "elggFormField",
        "elggLayout",
        "elggMenu",
        "elggPage"
    ],
    "factories": [],
    "filters": [],
    "services": [
        "elggMenus"
    ],
    "states": {
        "settings.account": accountSettingsState,
        "default": defaultState,
        "index": indexState
    }
}).config(function configureAngularytics(AngularyticsProvider) {
    AngularyticsProvider.setEventHandlers(['GoogleUniversal', 'Console']);
}).run(function loadAndConfigureGoogleAnalytics(profile) {
    var google = profile.google || {};
    var analytics = google.analytics || {};
    
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
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
