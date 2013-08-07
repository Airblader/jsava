qx.Class.define( 'java.util.AbstractMap.SimpleImmutableEntry', {
    extend: java.util.Map.Entry,
    implement: [java.io.Serializable],

    /* Note : this class is not static since unlike in Java, it is not represented as an inner class */

    construct: function () {
        var args = Array.prototype.slice.call( arguments );
        switch( args.length ) {
            case 1:
                // TODO use qx.Interface.classImplements
                this.assertInterface( args[0], java.util.Map.Entry );
                this.__key = args[0].getKey();
                this.__value = args[0].getValue();
                break;
            case 2:
                this.__key = args[0];
                this.__value = args[1];
                break;
            default:
                /* TODO throw error */
                break;
        }
    },

    statics: {
        serialVersionUID: 1
    },

    members: {
        __key: undefined,
        __value: undefined,

        __eq: function (obj1, obj2) {
            return obj1 === null ? obj2 === null : obj1.equals( obj2 );
        },

        getKey: function () {
            return this.__key;
        },

        getValue: function () {
            return this.__value;
        },

        setValue: function (value) {
            throw new java.lang.UnsupportedOperationException();
        },

        equals: function (other) {
            // TODO use qx.Class.isSubClassOf
            if( !(other instanceof java.util.Map.Entry) ) {
                return false;
            }

            return __eq( this.__key, other.getKey() ) && eq( this.__value, other.getValue() );
        },

        hashCode: function () {
            return (this.__key === null ? 0 : this.__key.hashCode()) ^
                (this.__value === null ? 0 : this.__value.hashCode());
        },

        toString: function () {
            return this.__key + '=' + this.__value;
        }
    }
} );