qx.Class.define( 'jsava.util.TreeMap', {
    extend: jsava.util.AbstractMap,
    implement: [jsava.io.Serializable],

    construct: function () {
    },

    statics: {
        /** @private */
        serialVersionUID: 1,
        Entry: qx.Class.define( 'jsava.util.TreeMap.Entry', {
            extend: jsava.lang.Object,
            implement: [jsava.util.Map.Entry],

            construct: function (key, value, parent) {
                this.key = key;
                this.value = value;
                this.parent = parent;
            },

            members: {
                key: undefined,
                value: undefined,
                left: undefined,
                right: undefined,
                parent: undefined,
                color: 'black'
            }
        } )
    },

    members: {
        root: undefined,
        _size: 0,
        modCount: 0,
        comparator: undefined,

        add: undefined,
        iterator: undefined,
        size: undefined,
        isEmpty: undefined
    }
} )
;