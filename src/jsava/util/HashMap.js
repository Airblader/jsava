qx.Class.define( 'jsava.util.HashMap', {
    extend: jsava.util.AbstractMap,
    implement: [jsava.util.Map, jsava.io.Serializable, jsava.lang.Cloneable],

    construct: function () {
        var args = Array.prototype.slice.call( arguments ),
            initialCapacity = this.self( arguments ).DEFAULT_INITIAL_CAPACITY,
            loadFactor = this.self( arguments ).DEFAULT_INITIAL_CAPACITY;

        switch( args.length ) {
            case 1:
                if( qx.Class.implementsInterface( args[0], jsava.util.Map ) ) {
                    // TODO
                    throw new jsava.lang.UnsupportedOperationException();
                } else {
                    initialCapacity = args[0];
                }
                break;
            case 2:
                initialCapacity = args[0];
                loadFactor = args[1];
                break;
        }

        if( initialCapacity < 0 ) {
            throw new jsava.lang.IllegalArgumentException( 'Illegal initial capacity: ' + initialCapacity );
        }
        if( initialCapacity > this.self( arguments ).MAXIMUM_CAPACITY ) {
            initialCapacity = this.self( arguments ).MAXIMUM_CAPACITY;
        }
        if( loadFactor <= 0 || isNaN( loadFactor ) ) {
            throw new jsava.lang.IllegalArgumentException( 'Illegal load factor: ' + loadFactor );
        }

        var capacity = 1;
        while( capacity < initialCapacity ) {
            capacity <<= 1;
        }

        this._loadFactor = loadFactor;
        this._threshold = (capacity * loadFactor) | 0;
        this._table = undefined; // TODO
        this._init();
    },

    statics: {
        serialVersionUID: 1,

        DEFAULT_INITIAL_CAPACITY: 16,
        MAXIMUM_CAPACITY: 1 << 30,
        DEFAULT_LOAD_FACTOR: 0.75,

        _hash: function (hash) {
            hash ^= (hash >>> 20) ^ (hash >>> 12);
            return hash ^ (hash >>> 7) ^ (hash >>> 4);
        },

        _indexFor: function (hashCode, length) {
            return hashCode & (length - 1);
        }
    },

    members: {
        /** @type jsava.util.HashMap.Entry */
        _table: undefined,
        /** @type Integer */
        _size: undefined,
        /** @type Integer */
        _threshold: undefined,
        /** @type Number */
        _loadFactor: undefined,
        /** @type Integer */
        _modCount: undefined,
        /** @type jsava.util.Set */
        __entrySet: undefined,

        /**
         * Initialization hook for subclasses. This method is called
         * in all constructors and pseudo-constructors (clone, readObject)
         * after HashMap has been initialized but before any entries have
         * been inserted.  (In the absence of this method, readObject would
         * require explicit knowledge of subclasses.)
         */
        _init: function () {
        },

        size: function () {
            return this._size;
        },

        isEmpty: function () {
            return this._size === 0;
        },

        get: function (key) {
            if( key === null ) {
                // TODO
            }

            var hash = this._hash( key.hashCode() );
            for( var entry = this._table[this._indexFor( hash, this._table.length )];
                 entry !== null; entry = entry.next() ) {
                /** @type jsava.lang.Object */
                var k;
                // TODO revisit this when inner classes are implemented to check names
                if( entry._hash === hash && ((k = entry._key) === key || key.equals( k )) ) {
                    return entry._value;
                }
            }

            return null;
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