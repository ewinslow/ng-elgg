export default class {
    /**
     * @ngInject
     */
    constructor($scope) {
        $scope['ctrl'] = this;

        this.style = "special";
    }
};
