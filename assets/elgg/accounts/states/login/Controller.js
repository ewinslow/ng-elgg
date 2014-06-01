export default class {
    /**
     * @ngInject
     */
    constructor($q, $state, profile) {
     	this.$q = $q;
        this.$state = $state;
        this.appName = profile.name;
        
        this.isSubmitting = false;
        this.requiresPassword = false;
        
        this.action = '';
        this.email = {};
        this.password = {};
    }
    
    submit() {
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
    }
  
    signIn(email) {
        return this.federatedSignIn(email).catch(function() {
            this.password.required = true;
            this.password.hasFocus = true;
        }.bind(this));
    }
    
  	federatedSignIn(email) {
      	var defer = this.$q.defer();
      
        setTimeout(function() {
            defer.reject({'code': 500});
        }, 1000);
      
        return defer.promise;
    }
    
    register(email) {
        return this.federatedSignIn(email).catch(function() {
            this.$state.go('validateemail', {email: email});
        }.bind(this));
    }
    
    passwordSignIn() {
        var defer = this.$q.defer();
        
        setTimeout(function() {
            defer.reject({'code': 501});
        }, 1000);
        
        defer.promise.catch(function(error) {
            this.error = error;
        }.bind(this));
        
        return defer.promise;
    }
    
    forgotPassword(email) {
        this.resetPassword(email).then(function() {
            return this.$state.go('forgotpassword', { email: email });
        }.bind(this));
    };
    
    resetPassword(email) {
        return this.$q.when({});
    }
};
