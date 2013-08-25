qx.Class.define( 'jsava.util.TreeMap', {
    extend: jsava.util.AbstractMap,
    implement: [jsava.io.Serializable],

    construct: function () {
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    },

    members: {
        add: undefined,
        iterator: undefined,
        size: undefined,
        isEmpty: undefined
    }
} );