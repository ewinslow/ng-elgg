import createModule from 'ngRequire/createModule';
import elggCore from 'elgg/core/module';

export default createModule('elgg/blog', [elggCore], {
    "directives": [
        "elggFormBlogSave"
    ],
    "states": {
        "blog": require('./states/blog/main'),
        "blog.add": require('./states/blog.add/main'),
        "blog.edit": require('./states/blog.edit/main'),
        "blog.view": require('./states/blog.view/main'),
    },
});
