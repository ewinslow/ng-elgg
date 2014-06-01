import createModule from 'ngRequire/createModule';
import elggCore from 'elgg/core/module';

export default createModule('elgg/events', [elggCore], {
    "states": {
        "events": {
            "controller": true,
            "parent": "default",
            "resolve": [
                "events"
            ],
            "template": true,
            "url": "/events"
        },
        "events.single": {
            "controller": true,
            "resolve": [
                "event"
            ],
            "template": true,
            "url": "/:event"
        }
    }
});
