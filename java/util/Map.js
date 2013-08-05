qx.Interface.define( "java.util.Map", {
    members: {
        size: function () {
        },

        isEmpty: function () {
        },

        containsKey: function (key) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        containsValue: function (value) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        get: function (key) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        put: function (key, value) {
            this.assertArgumentsCount( arguments, 2, 2 );
        },

        remove: function (key) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        putAll: function (map) {
            this.assertInterface( map, java.util.Map );
        },

        clear: function () {

        },

        keySet: function () {
        },

        values: function () {
        },

        entrySet: function () {
        },

        equals: function (other) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        hashCode: function () {
        }
    }
} );

qx.Interface.define( 'java.util.Map.Entry', {
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