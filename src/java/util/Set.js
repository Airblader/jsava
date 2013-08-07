qx.Interface.define( 'java.util.Set', {
    extend: java.util.Collection,

    members: {
        size: function () {
        },

        isEmpty: function () {
        },

        contains: function (obj) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        iterator: function () {
        },

        toArray: function () {
        },

        add: function (elem) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        remove: function (elem) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        containsAll: function (collection) {
            this.assertInterface( collection, java.util.Collection );
        },

        addAll: function (collection) {
            this.assertInterface( collection, java.util.Collection );
        },

        retainAll: function (collection) {
            this.assertInterface( collection, java.util.Collection );
        },

        removeAll: function (collection) {
            this.assertInterface( collection, java.util.Collection );
        },

        clear: function () {
        },

        equals: function (other) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        hashCode: function () {
        }
    }
} );