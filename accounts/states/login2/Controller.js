define(function(require) {

    /**
     * @ngInject
     */
    function Controller($timeout) {
        /** @private */
        this.$timeout = $timeout;

        this.mode = 'email';
        this.waiting = false;
    };

    Controller.prototype.submit = function() {
        if (this.mode == 'email') {
            this.handleEmailSubmit();
        } else {
            this.handleLegacySubmit();
        }
    };


    Controller.prototype.handleEmailSubmit = function() {
        this.waiting = true;

        // Simulate waiting for server
        this.$timeout(function() {
            this.mode = 'legacy';
            this.waiting = false;
        }.bind(this), 2500);
    };


    Controller.prototype.handleLegacySubmit = function() {
        alert('Coming soon!');
    };

    return Controller;
});
