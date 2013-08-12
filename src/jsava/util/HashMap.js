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
        },

        Entry: qx.Class.define( 'jsava.util.HashMap.Entry', {
            extend: jsava.lang.Object,
            implement: [jsava.util.Map.Entry],

            construct: function (hash, key, value, nextEntry) {
                this._value = value;
                this._next = nextEntry;
                this._key = key;
                this._hash = hash;
            },

            members: {
                _key: undefined,
                _value: undefined,
                /** @type jsava.util.HashMap.Entry */
                _next: undefined,
                /** @type Integer */
                _hash: undefined,

                getKey: function () {
                    return this._key;
                },

                getValue: function () {
                    return this._value;
                },

                setValue: function (newValue) {
                    var oldValue = this._value;
                    this._value = newValue;
                    return oldValue;
                },

                equals: function (obj) {
                    if( !qx.Class.isSubClassOf( obj, jsava.util.HashMap.Entry ) ) {
                        return false;
                    }

                    /** @type jsava.util.HashMap.Entry */
                    var entry = obj,
                        key1 = this.getKey(),
                        key2 = entry.getKey();
                    if( key1 === key2 || (key1 !== null && key1.equals( key2 )) ) {
                        var value1 = this.getValue(),
                            value2 = entry.getValue();
                        if( value1 === value2 || (value1 !== null && value1.equals( value2 )) ) {
                            return true;
                        }
                    }

                    return false;
                },

                hashCode: function () {
                    return (this._key === null ? 0 : this._key.hashCode()) ^
                        (this._value === null ? 0 : this._value.hashCode());
                },

                toString: function () {
                    return this.getKey() + '=' + this.getValue();
                },

                /**
                 * This method is invoked whenever the value in an entry is
                 * overwritten by an invocation of put(k,v) for a key k that's already
                 * in the HashMap.
                 */
                _recordAccess: function () {
                },

                /**
                 * This method is invoked whenever the entry is
                 * removed from the table.
                 */
                _recordRemoval: function () {
                }
            }
        } )
    },

    members: {
        /** @type jsava.util.HashMap.Entry[] */
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