import createModule from 'ngRequire/createModule';
import elggCore from 'elgg/core/module';

export default createModule('elgg/posts', [elggCore], {
    "states": {
        "posts": {
            "controller": true,
            "parent": "default",
            "resolve": [
                "posts"
            ],
            "template": true,
            "url": "/posts"
        },
        "posts.single": {
            "controller": true,
            "resolve": [
                "post"
            ],
            "template": true,
            "url": "/:post"
        }
    }
});
