export default class {
    /**
     * @ngInject
     */
    constructor($stateParams) {
        this.email = $stateParams.email;
    }
};