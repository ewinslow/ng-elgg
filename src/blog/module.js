import addBlogState from './states/blog.add/main';
import blogState from './states/blog/main';
import createModule from 'ngRequire/createModule';
import editBlogState from './states/blog.edit/main';
import elggCore from 'elgg/core/module';
import viewBlogState from './states/blog.view/main';

export default createModule('elgg/blog', [elggCore], {
    "directives": [
        "elggFormBlogSave"
    ],
    "states": {
        "blog": blogState,
        "blog.add": addBlogState,
        "blog.edit": editBlogState,
        "blog.view": viewBlogState,
    },
});
