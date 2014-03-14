define(function() {
    /**
     * @ngInject
     */
    function Controller($q, $state, profile) {
     	this.$q = $q;
        this.$state = $state;
        this.appName = profile.name;
        
        this.isSubmitting = false;
        this.requiresPassword = false;
        
        this.action = '';
        this.email = {};
        this.password = {};
    };
    
    Controller.prototype.submit = function() {
        this.isSubmitting = true;
        
        var promise;
        
        if (this.action == 'signin') {
            if (this.password.required) {
                promise = this.passwordSignIn(this.email.value, this.password.value);
            } else {
                promise = this.signIn(this.email.value);
            }
        } else if (this.action == 'register') {
            promise = this.register(this.email.value);
        } else if(this.action == 'forgotpassword') {
            promise = this.forgotPassword(this.email.value);
        } else {
            promise = this.$q.reject({'code': 501});   
        }
        
        promise.finally(function() {
        	this.isSubmitting = false;
        }.bind(this));
        
        return promise;
    };
  
    Controller.prototype.signIn = function(email) {
        return this.federatedSignIn(email).catch(function() {
            this.password.required = true;
            this.password.hasFocus = true;
        }.bind(this));
    };
    
  	Controller.prototype.federatedSignIn = function(email) {
      	var defer = this.$q.defer();
      
        setTimeout(function() {
            defer.reject({'code': 500});
        }, 1000);
      
        return defer.promise;
    };
    
    Controller.prototype.register = function(email) {
        return this.federatedSignIn(email).catch(function() {
            this.$state.go('validateemail', {email: email});
        }.bind(this));
    };
    
    Controller.prototype.passwordSignIn = function() {
        var defer = this.$q.defer();
        
        setTimeout(function() {
            defer.reject({'code': 501});
        }, 1000);
        
        defer.promise.catch(function(error) {
            this.error = error;
        }.bind(this));
        
        return defer.promise;
    };
    
    Controller.prototype.forgotPassword = function(email) {
        this.resetPassword(email).then(function() {
            return this.$state.go('forgotpassword', { email: email });
        }.bind(this));
    };
    
    Controller.prototype.resetPassword = function(email) {
        return this.$q.when({});
    };
    
    return Controller;
});
