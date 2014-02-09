define(function() {

    /**
     * Creates a new class. Intended to look familiar to ES6 classes.
     *
     * var newClass = require('evan/newClass');
     * var ParentClass = require('some/other/Class');
     *
     * var MyClass = newClass({
     *   'extends': ParentClass,
     *
     *   constructor: function(prop) {
     *     this.prop = prop;
     *   },
     *
     *   doSomething: function() {
     *     return this.prop.foobar();
     *   }
     * });
     *
     * compare to ES6:
     *
     * import ParentClass from 'some/other/Class'
     *
     * class MyClass extends ParentClass {
     *   constructor(prop) {
     *     this.prop = prop;
     *   }
     *
     *   doSomething() {
     *     return this.prop.foobar();
     *   }
     * }
     *
     */
    return function(classDef) {
        var Ctor = classDef.constructor;
        delete classDef.constructor;

        var Parent = classDef['extends'] || Object;
        delete classDef['extends'];

        Ctor.prototype = Object.create(Parent.prototype)
        Ctor.prototype.constructor = Ctor;

        for (var prop in classDef) {
            Ctor.prototype[prop] = classDef[prop];
        }

        return Ctor;
    };

});
