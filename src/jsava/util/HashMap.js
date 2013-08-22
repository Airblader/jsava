qx.Class.define( 'jsava.util.HashMap', {
    extend: jsava.util.AbstractMap,
    implement: [jsava.util.Map, jsava.io.Serializable, jsava.lang.Cloneable],

    construct: function () {
        var args = Array.prototype.slice.call( arguments ),
            initialCapacity = this.self( arguments ).DEFAULT_INITIAL_CAPACITY,
            loadFactor = this.self( arguments ).DEFAULT_LOAD_FACTOR;

        switch( args.length ) {
            case 1:
                if( qx.Class.implementsInterface( args[0], jsava.util.Map ) ) {
                    initialCapacity = Math.max( ((args[0].size() / this.self( arguments ).DEFAULT_LOAD_FACTOR) | 0) + 1,
                        this.self( arguments ).DEFAULT_INITIAL_CAPACITY );
                    loadFactor = this.self( arguments ).DEFAULT_LOAD_FACTOR;
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
        this.table = jsava.JsavaUtils.arrayOfGivenSize( capacity, null );
        this.init();
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
                _key: null,
                _value: null,
                /** @type jsava.util.HashMap.Entry */
                _next: null,
                /** @type Number */
                _hash: 0,

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
                    if( obj === null || !qx.Class.implementsInterface( obj, jsava.util.HashMap.Entry ) ) {
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
                _recordAccess: function (map) {
                },

                /**
                 * This method is invoked whenever the entry is
                 * removed from the table.
                 */
                _recordRemoval: function (map) {
                }
            }
        } )
    },

    members: {
        /** @type jsava.util.HashMap.Entry[] */
        table: null,
        /** @type Number */
        _size: 0,
        /** @type Number */
        _threshold: 0,
        /** @type Number */
        _loadFactor: 0,
        /** @type Number */
        modCount: 0,
        /** @implements jsava.util.Set */
        __entrySet: null,

        /**
         * Initialization hook for subclasses. This method is called
         * in all constructors and pseudo-constructors (clone, readObject)
         * after HashMap has been initialized but before any entries have
         * been inserted.  (In the absence of this method, readObject would
         * require explicit knowledge of subclasses.)
         * @protected
         */
        init: function () {
        },

        size: function () {
            return this._size;
        },

        isEmpty: function () {
            return this._size === 0;
        },

        get: function (key) {
            if( key === null ) {
                return this.__getForNullKey();
            }

            var hash = this.self( arguments )._hash( key.hashCode() );
            for( var entry = this.table[this.self( arguments )._indexFor( hash, this.table.length )];
                 entry !== null; entry = entry._next ) {
                /** @type jsava.lang.Object */
                var k;
                if( entry._hash === hash && ((k = entry._key) === key || key.equals( k )) ) {
                    return entry._value;
                }
            }

            return null;
        },

        __getForNullKey: function () {
            for( var entry = this.table[0]; entry !== null; entry = entry._next ) {
                if( entry._key === null ) {
                    return entry._value;
                }
            }

            return null;
        },

        containsKey: function (key) {
            return this._getEntry( key ) !== null;
        },

        _getEntry: function (key) {
            var hash = (key === null) ? 0 : this.self( arguments )._hash( key.hashCode() );
            for( var entry = this.table[this.self( arguments )._indexFor( hash, this.table.length )];
                 entry !== null; entry = entry._next ) {
                /** @type jsava.lang.Object */
                var k;
                if( entry._hash === hash
                    && ( ( k = entry._key ) === key || ( key !== null && key.equals( k ) ) ) ) {
                    return entry;
                }
            }

            return null;
        },

        put: function (key, value) {
            if( key === null ) {
                return this.__putForNullKey( value );
            }

            var hash = this.self( arguments )._hash( key.hashCode() ),
                i = this.self( arguments )._indexFor( hash, this.table.length );
            for( var entry = this.table[i]; entry !== null; entry = entry._next ) {
                /** @type jsava.lang.Object */
                var k;
                if( entry._hash === hash && ( (k = entry._key) === key || key.equals( k ) ) ) {
                    var oldValue = entry._value;
                    entry._value = value;
                    entry._recordAccess( this );
                    return oldValue;
                }
            }

            this.modCount++;
            this._addEntry( hash, key, value, i );
            return null;
        },

        __putForNullKey: function (value) {
            for( var entry = this.table[0]; entry !== null; entry = entry._next ) {
                if( entry._key === null ) {
                    var oldValue = entry._value;
                    entry._value = value;
                    entry._recordAccess( this );
                    return oldValue;
                }
            }

            this.modCount++;
            this._addEntry( 0, null, value, 0 );
            return null;
        },

        __putForCreate: function (key, value) {
            var hash = (key === null) ? 0 : this.self( arguments )._hash( key.hashCode() ),
                i = this.self( arguments )._indexFor( hash, this.table.length );
            for( var entry = this.table[i]; entry !== null; entry = entry._next ) {
                /** @type jsava.lang.Object */
                var k;
                if( entry._hash === hash
                    && ( (k = entry._key) === key || ( key !== null && key.equals( k ) ) ) ) {
                    entry._value = value;
                    return;
                }
            }

            this._createEntry( hash, key, value, i );
        },

        __putAllForCreate: function (map) {
            var iterator = map.entrySet().iterator();
            while( iterator.hasNext() ) {
                var entry = iterator.next();
                this.__putForCreate( entry.getKey(), entry.getValue() );
            }
        },

        _resize: function (newCapacity) {
            var oldTable = this.table,
                oldCapacity = oldTable.length;
            if( oldCapacity === this.self( arguments ).MAXIMUM_CAPACITY ) {
                this._threshold = Number.MAX_VALUE;
                return;
            }

            var newTable = jsava.JsavaUtils.arrayOfGivenSize( newCapacity, null );
            this._transfer( newTable );
            this.table = newTable;
            this._threshold = (newCapacity * this._loadFactor) | 0;
        },

        _transfer: function (newTable) {
            var src = this.table,
                newCapacity = newTable.length;
            for( var j = 0; j < src.length; j++ ) {
                var entry = src[j];
                if( entry !== null ) {
                    src[j] = null;
                    do {
                        var next = entry._next,
                            i = this.self( arguments )._indexFor( entry._hash, newCapacity );
                        entry._next = newTable[i];
                        newTable[i] = entry;
                        entry = next;
                    } while( entry !== null );
                }
            }
        },

        putAll: function (map) {
            var numKeysToBeAdded = map.size();
            if( numKeysToBeAdded === 0 ) {
                return;
            }

            if( numKeysToBeAdded > this._threshold ) {
                var targetCapacity = (numKeysToBeAdded / this._loadFactor + 1) | 0;
                if( targetCapacity > this.self( arguments ).MAXIMUM_CAPACITY ) {
                    targetCapacity = this.self( arguments ).MAXIMUM_CAPACITY;
                }

                var newCapacity = this.table.length;
                while( newCapacity < targetCapacity ) {
                    newCapacity <<= 1;
                }
                if( newCapacity > this.table.length ) {
                    this._resize( newCapacity );
                }
            }

            var iterator = map.entrySet().iterator();
            while( iterator.hasNext() ) {
                var entry = iterator.next();
                this.put( entry.getKey(), entry.getValue() );
            }
        },

        remove: function (key) {
            var entry = this._removeEntryForKey( key );
            return entry === null ? null : entry._value;
        },

        _removeEntryForKey: function (key) {
            var hash = (key === null) ? 0 : this.self( arguments )._hash( key.hashCode() ),
                i = this.self( arguments )._indexFor( hash, this.table.length ),
                prev = this.table[i],
                entry = prev;

            while( entry !== null ) {
                var next = entry._next,
                    /** @type jsava.lang.Object */
                        k;
                if( entry._hash === hash
                    && ( (k = entry._key) === key || ( key !== null && key.equals( k ) ) ) ) {
                    this.modCount++;
                    this._size--;
                    if( prev === entry ) {
                        this.table[i] = next;
                    } else {
                        prev._next = next;
                    }
                    entry._recordRemoval( this );
                    return entry;
                }
                prev = entry;
                entry = next;
            }

            return entry;
        },

        _removeMapping: function (obj) {
            if( obj === null || !qx.Class.implementsInterface( obj, jsava.util.Map.Entry ) ) {
                return null;
            }

            /** @implements jsava.util.Map.Entry */
            var entry = obj,
                key = entry.getKey(),
                hash = (key === null) ? 0 : this.self( arguments )._hash( key.hashCode() ),
                i = this.self( arguments )._indexFor( hash, this.table.length ),
                prev = this.table[i],
                e = prev;

            while( e !== null ) {
                var next = e._next;
                if( e._hash === hash && e.equals( entry ) ) {
                    this.modCount++;
                    this._size--;
                    if( prev === e ) {
                        this.table[i] = next;
                    } else {
                        prev._next = next;
                    }
                    e._recordRemoval( this );
                    return e;
                }
                prev = e;
                e = next;
            }

            return e;
        },

        clear: function () {
            this.modCount++;
            var table = this.table;
            for( var i = 0; i < table.length; i++ ) {
                table[i] = null;
            }
            this._size = 0;
        },

        containsValue: function (value) {
            if( value === null ) {
                return this.__containsNullValue();
            }

            var table = this.table;
            for( var i = 0; i < table.length; i++ ) {
                for( var entry = table[i]; entry !== null; entry = entry._next ) {
                    if( value.equals( entry._value ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        __containsNullValue: function () {
            var table = this.table;
            for( var i = 0; i < table.length; i++ ) {
                for( var entry = table[i]; entry !== null; entry = entry._next ) {
                    if( entry._value === null ) {
                        return true;
                    }
                }
            }

            return false;
        },

        clone: function () {
            /** @type jsava.util.HashMap */
            var result = null;
            try {
                result = this.base( arguments );
            } catch( e ) {
                if( !qx.Class.isSubClassOf( e.constructor, jsava.lang.CloneNotSupportedException ) ) {
                    throw e;
                }
            }

            result.table = jsava.JsavaUtils.arrayOfGivenSize( this.table.length, null );
            result.__entrySet = null;
            result.modCount = 0;
            result._size = 0;
            result.init();
            result.__putAllForCreate( this );

            return result;
        },

        _addEntry: function (hash, key, value, bucketIndex) {
            var entry = this.table[bucketIndex];
            this.table[bucketIndex] = new (this.self( arguments ).Entry)( hash, key, value, entry );
            if( this._size++ >= this._threshold ) {
                this._resize( 2 * this.table.length );
            }
        },

        _createEntry: function (hash, key, value, bucketIndex) {
            var entry = this.table[bucketIndex];
            this.table[bucketIndex] = new (this.self( arguments ).Entry)( hash, key, value, entry );
            this._size++;
        },

        keySet: function () {
            var keySet = this._keySet;
            return keySet !== null ? keySet : ( this._keySet = new this.KeySet( this ) );
        },

        values: function () {
            var values = this._values;
            return values !== null ? values : ( this._values = new this.Values( this ) );
        },

        entrySet: function () {
            return this.__entrySet0();
        },

        __entrySet0: function () {
            var entrySet = this.__entrySet;
            return entrySet !== null ? entrySet : ( this.__entrySet = new this.EntrySet( this ) );
        },

        /** @private */
        HashIterator: qx.Class.define( 'jsava.util.HashMap.HashIterator', {
            extend: jsava.lang.Object,
            implement: [jsava.util.Iterator],

            type: 'abstract',

            /** @protected */
            construct: function (thisHashMap) {
                this.__thisHashMap = thisHashMap;
                this.expectedModCount = this.__thisHashMap.modCount;
                if( this.__thisHashMap._size > 0 ) {
                    var table = this.__thisHashMap.table;
                    while( this._index < table.length && ( this._next = table[this._index++] ) === null ) {
                        // do nothing
                    }
                }
            },

            members: {
                __thisHashMap: null,

                /** @type jsava.util.HashMap.Entry */
                _next: null,
                /** @type Number */
                expectedModCount: 0,
                /** @type Number */
                _index: 0,
                /** @type jsava.util.HashMap.Entry */
                current: null,

                hasNext: function () {
                    return this._next !== null;
                },

                _nextEntry: function () {
                    if( this.__thisHashMap.modCount !== this.expectedModCount ) {
                        throw new jsava.lang.ConcurrentModificationException();
                    }

                    var entry = this._next;
                    if( entry === null ) {
                        throw new jsava.lang.NoSuchElementException();
                    }

                    if( (this._next = entry._next) === null ) {
                        var table = this.__thisHashMap.table;
                        while( this._index < table.length && ( this._next = table[this._index++] ) === null ) {
                            // do nothing
                        }
                    }

                    this.current = entry;
                    return entry;
                },

                remove: function () {
                    if( this.current === null ) {
                        throw new jsava.lang.IllegalStateException();
                    }

                    if( this.__thisHashMap.modCount !== this.expectedModCount ) {
                        throw new jsava.lang.ConcurrentModificationException();
                    }

                    var key = this.current._key;
                    this.current = null;
                    this.__thisHashMap._removeEntryForKey( key );
                    this.expectedModCount = this.__thisHashMap.modCount;
                }
            }
        } ),

        _newKeyIterator: function () {
            return new this.KeyIterator( this );
        },

        _newValueIterator: function () {
            return new this.ValueIterator( this );
        },

        _newEntryIterator: function () {
            return new this.EntryIterator( this );
        },

        /** @private */
        ValueIterator: qx.Class.define( 'jsava.util.HashMap.ValueIterator', {
            extend: jsava.util.HashMap.HashIterator,

            construct: function (thisHashMap) {
                this.base( arguments, thisHashMap );
            },

            members: {
                next: function () {
                    return this._nextEntry()._value;
                }
            }
        } ),

        /** @private */
        KeyIterator: qx.Class.define( 'jsava.util.HashMap.KeyIterator', {
            extend: jsava.util.HashMap.HashIterator,

            construct: function (thisHashMap) {
                this.base( arguments, thisHashMap );
            },

            members: {
                next: function () {
                    return this._nextEntry().getKey();
                }
            }
        } ),

        /** @private */
        EntryIterator: qx.Class.define( 'jsava.util.HashMap.EntryIterator', {
            extend: jsava.util.HashMap.HashIterator,

            construct: function (thisHashMap) {
                this.base( arguments, thisHashMap );
            },

            members: {
                next: function () {
                    return this._nextEntry();
                }
            }
        } ),

        /** @private */
        KeySet: qx.Class.define( 'jsava.util.HashMap.KeySet', {
            extend: jsava.util.AbstractSet,

            construct: function (thisHashMap) {
                this.base( arguments );
                this.__thisHashMap = thisHashMap;
            },

            members: {
                __thisHashMap: null,

                iterator: function () {
                    return this.__thisHashMap._newKeyIterator();
                },

                size: function () {
                    return this.__thisHashMap._size;
                },

                contains: function (obj) {
                    return this.__thisHashMap.containsKey( obj );
                },

                remove: function (obj) {
                    return this.__thisHashMap._removeEntryForKey( obj ) !== null;
                },

                clear: function () {
                    this.__thisHashMap.clear();
                }
            }
        } ),

        /** @private */
        Values: qx.Class.define( 'jsava.util.HashMap.Values', {
            extend: jsava.util.AbstractCollection,

            construct: function (thisHashMap) {
                this.base( arguments );
                this.__thisHashMap = thisHashMap;
            },

            members: {
                __thisHashMap: null,

                iterator: function () {
                    return this.__thisHashMap._newValueIterator();
                },

                size: function () {
                    return this.__thisHashMap._size;
                },

                contains: function (obj) {
                    return this.__thisHashMap.containsValue( obj );
                },

                clear: function () {
                    this.__thisHashMap.clear();
                }
            }
        } ),

        /** @private */
        EntrySet: qx.Class.define( 'jsava.util.HashMap.EntrySet', {
            extend: jsava.util.AbstractSet,

            construct: function (thisHashMap) {
                this.base( arguments );
                this.__thisHashMap = thisHashMap;
            },

            members: {
                __thisHashMap: null,

                iterator: function () {
                    return this.__thisHashMap._newEntryIterator();
                },

                size: function () {
                    return this.__thisHashMap._size;
                },

                contains: function (obj) {
                    if( obj === null || !qx.Class.implementsInterface( obj, jsava.util.Map.Entry ) ) {
                        return false;
                    }

                    /** @implements jsava.util.Map.Entry */
                    var entry = obj,
                        candidate = this.__thisHashMap._getEntry( entry.getKey() );
                    return candidate !== null && candidate.equals( entry );
                },

                remove: function (obj) {
                    return this.__thisHashMap._removeMapping( obj ) !== null;
                },

                clear: function () {
                    this.__thisHashMap.clear();
                }
            }
        } )
    }
} );