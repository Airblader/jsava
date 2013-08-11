qx.Class.define( 'jsava.util.HashMap', {
    extend: jsava.util.AbstractMap,
    implement: [jsava.util.Map, jsava.io.Serializable, jsava.lang.Cloneable],

    construct: function () {
        // TODO overloaded signatures
        if( Array.prototype.slice.call( arguments ).length !== 0 ) {
            throw new jsava.lang.UnsupportedOperationException();
        }

        // TODO
    },

    statics: {
        serialVersionUID: 1,

        DEFAULT_INITIAL_CAPACITY: 16,
        MAXIMUM_CAPACITY: 1 << 30,
        DEFAULT_LOAD_FACTOR: 0.75,

        _hash: function () {
            // TODO
        },

        _indexFor: function (hashCode, length) {
            // TODO
        }
    },

    members: {
        /** @type jsava.util.HashMap.Entry */
        _table: undefined,
        // TODO types
        _size: undefined,
        _threshold: undefined,
        _loadFactor: undefined,
        _modCount: undefined,
        __entrySet: undefined,

        _init: function () {
        },

        size: function () {
            // TODO
        },

        isEmpty: function () {
            // TODO
        },

        get: function (obj) {
            // TODO
        },

        containsKey: function (key) {
            // TODO
        },

        _getEntry: function (key) {
            // TODO
        },

        put: function (key, value) {
            // TODO
        },

        _resize: function (newCapacity) {
            // TODO
        },

        _transfer: function (newTable) {
            // TODO
        },

        putAll: function (map) {
            // TODO
        },

        remove: function (key) {
            // TODO
        },

        _removeEntryForKey: function (key) {
            // TODO
        },

        _removeMapping: function (obj) {
            // TODO
        },

        clear: function () {
            // TODO
        },

        containsValue: function (value) {
            // TODO
        },

        clone: function () {
            // TODO
        },

        _addEntry: function (hash, key, value, bucketIndex) {
            // TODO
        },

        _createEntry: function (hash, key, value, bucketIndex) {
            // TODO
        },

        _newKeyIterator: function () {
            // TODO
        },

        _newValueIterator: function () {
            // TODO
        },

        _newEntryIterator: function () {
            // TODO
        },

        keySet: function () {
            // TODO
        },

        values: function () {
            // TODO
        },

        entrySet: function () {
            // TODO
        }
    }
} );