export default {
    /**
     * @bgInject
     */
    post: function($stateParams) {
        return {
            "id": $stateParams.post
        };
    }
};
