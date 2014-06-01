import createModule from 'ngRequire/createModule';
import elggCore from 'elgg/core/module';
import login from './states/login/main';
import validateEmail from './states/validateemail/main';
import forgotPassword from './states/forgotpassword/main';

export default createModule('elgg/accounts', [elggCore], {
    "states": {
        "login": require('./states/login/main'),
        "validateemail": require('./states/validateemail/main'),
        "forgotpassword": require('./states/forgotpassword/main'),
    }
});
