export default {
    /**
     * @ngInject
     */
    event: function($stateParams) {
        // TODO(ewinslow): Actually fetch something from server/local storage
        return {
            id: $stateParams.event
        };
    }
};
