import createModule from 'ngRequire/createModule';
import elggCore from 'elgg/core/module';
import loginState from './states/login/main';
import validateEmailState from './states/validateemail/main';
import forgotPasswordState from './states/forgotpassword/main';

export default createModule('elgg/accounts', [elggCore], {
    "states": {
        "login": loginState,
        "validateemail": validateEmailState,
        "forgotpassword": forgotPasswordState,
    }
});
