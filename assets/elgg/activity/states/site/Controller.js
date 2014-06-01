import Collection from 'evan/Collection';

class Controller extends Collection {
    /**
     * @ngInject
     */
    constructor($scope, river, $http, evanUser) {
        super(river, $http);

        $scope.ctrl = this;
        $scope.user = evanUser;
    }
}

Controller.$resolve = {
    river: function(evanDatabase) {
        return evanDatabase.getActivity();
    }
};

export default Controller;
