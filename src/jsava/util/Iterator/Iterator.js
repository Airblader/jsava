/**
 * This class only exists due to the inability to define anonymous inner classes
 * with the OOP framework.
 */
qx.Class.define( 'jsava.util.Iterator.Iterator', {
    extend: jsava.lang.Object,
    implement: [jsava.util.Iterator],

    construct: function () {
    },

    members: {
        hasNext: function () {
            throw new jsava.lang.UnsupportedOperationException();
        },

        next: function () {
            throw new jsava.lang.UnsupportedOperationException();
        },

        remove: function () {
            throw new jsava.lang.UnsupportedOperationException();
        }
    }
} );