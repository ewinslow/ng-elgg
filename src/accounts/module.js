import createModule from 'ngRequire/createModule';
import elggCore from 'elgg/core/module';

export default createModule('elgg/accounts', [elggCore], {
    "states": {
        "login": require('./states/login/main'),
    }
});
