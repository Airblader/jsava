qx.Interface.define( 'java.util.Map.Entry', {
    extend: java.lang.Object,

    members: {
        getKey: function () {
        },

        getValue: function () {
        },

        setValue: function (value) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        equals: function (other) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        hashCode: function () {
        }
    }
} );