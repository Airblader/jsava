qx.Class.define( 'jsava.util.HashMap', {
    extend: jsava.util.AbstractMap,
    implement: [jsava.util.Map, jsava.io.Serializable, jsava.lang.Cloneable],

    construct: function () {
        this.base( arguments );

        var args = Array.prototype.slice.call( arguments ),
            initialCapacity = this.self( arguments ).DEFAULT_INITIAL_CAPACITY,
            loadFactor = this.self( arguments ).DEFAULT_LOAD_FACTOR;

        switch( args.length ) {
            case 1:
                if( qx.Class.hasInterface( args[0].constructor, jsava.util.Map ) ) {
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

        this.loadFactor = loadFactor;
        this.threshold = (capacity * loadFactor) | 0;
        this.table = jsava.Utils.arrayOfGivenSize( capacity, null );
        this.init();

        var thisHashMap = this;

        this.HashIterator = jsava.Utils.createAnonymousClass( {
            extend: jsava.lang.Object,
            implement: [jsava.util.Iterator],

            type: 'abstract',

            /** @protected */
            construct: function () {
                this.expectedModCount = this.__thisHashMap.modCount;
                if( this.__thisHashMap._size > 0 ) {
                    var table = this.__thisHashMap.table;
                    while( this.index < table.length && ( this._next = table[this.index++] ) === null ) {
                        // do nothing
                    }
                }
            },

            members: {
                __thisHashMap: thisHashMap,

                /** @type jsava.util.HashMap.Entry */
                _next: null,
                /** @type Number */
                expectedModCount: 0,
                /** @type Number */
                index: 0,
                /** @type jsava.util.HashMap.Entry */
                current: null,

                hasNext: function () {
                    return this._next !== null;
                },

                nextEntry: function () {
                    if( this.__thisHashMap.modCount !== this.expectedModCount ) {
                        throw new jsava.lang.ConcurrentModificationException();
                    }

                    var entry = this._next;
                    if( entry === null ) {
                        throw new jsava.lang.NoSuchElementException();
                    }

                    if( (this._next = entry.next) === null ) {
                        var table = this.__thisHashMap.table;
                        while( this.index < table.length && ( this._next = table[this.index++] ) === null ) {
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

                    var key = this.current.key;
                    this.current = null;
                    this.__thisHashMap.removeEntryForKey( key );
                    this.expectedModCount = this.__thisHashMap.modCount;
                }
            }
        } );

        this.EntrySet = jsava.Utils.createAnonymousClass( {
            extend: jsava.util.AbstractSet,

            members: {
                __thisHashMap: thisHashMap,

                iterator: function () {
                    return this.__thisHashMap.newEntryIterator();
                },

                size: function () {
                    return this.__thisHashMap._size;
                },

                contains: function (obj) {
                    if( obj === null || !qx.Class.hasInterface( obj.constructor, jsava.util.Map.Entry ) ) {
                        return false;
                    }

                    /** @implements jsava.util.Map.Entry */
                    var entry = obj,
                        candidate = this.__thisHashMap.getEntry( entry.getKey() );
                    return candidate !== null && candidate.equals( entry );
                },

                remove: function (obj) {
                    return this.__thisHashMap.removeMapping( obj ) !== null;
                },

                clear: function () {
                    this.__thisHashMap.clear();
                }
            }
        } );

        this.ValueIterator = jsava.Utils.createAnonymousClass( {
            extend: thisHashMap.HashIterator,

            members: {
                next: function () {
                    return this.nextEntry().value;
                }
            }
        } );

        this.KeyIterator = jsava.Utils.createAnonymousClass( {
            extend: thisHashMap.HashIterator,

            members: {
                next: function () {
                    return this.nextEntry().getKey();
                }
            }
        } );

        this.EntryIterator = jsava.Utils.createAnonymousClass( {
            extend: thisHashMap.HashIterator,

            members: {
                next: function () {
                    return this.nextEntry();
                }
            }
        } );

        this.KeySet = jsava.Utils.createAnonymousClass( {
            extend: jsava.util.AbstractSet,

            members: {
                __thisHashMap: thisHashMap,

                iterator: function () {
                    return this.__thisHashMap.newKeyIterator();
                },

                size: function () {
                    return this.__thisHashMap._size;
                },

                contains: function (obj) {
                    return this.__thisHashMap.containsKey( obj );
                },

                remove: function (obj) {
                    return this.__thisHashMap.removeEntryForKey( obj ) !== null;
                },

                clear: function () {
                    this.__thisHashMap.clear();
                }
            }
        } );

        this.Values = jsava.Utils.createAnonymousClass( {
            extend: jsava.util.AbstractCollection,

            members: {
                __thisHashMap: thisHashMap,

                iterator: function () {
                    return this.__thisHashMap.newValueIterator();
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
        } );
    },

    statics: {
        /** @private */
        serialVersionUID: 362498820763181,

        DEFAULT_INITIAL_CAPACITY: 16,
        MAXIMUM_CAPACITY: 1 << 30,
        DEFAULT_LOAD_FACTOR: 0.75,

        /** @protected */
        hash: function (hash) {
            hash ^= (hash >>> 20) ^ (hash >>> 12);
            return hash ^ (hash >>> 7) ^ (hash >>> 4);
        },

        /** @protected */
        indexFor: function (hashCode, length) {
            return hashCode & (length - 1);
        },

        Entry: qx.Class.define( 'jsava.util.HashMap.Entry', {
            extend: jsava.lang.Object,
            implement: [jsava.util.Map.Entry],

            construct: function (hash, key, value, nextEntry) {
                this.base( arguments );

                this.value = value;
                this.next = nextEntry;
                this.key = key;
                this.hash = hash;
            },

            members: {
                key: null,
                value: null,
                /** @type jsava.util.HashMap.Entry */
                next: null,
                /** @type Number */
                hash: 0,

                getKey: function () {
                    return this.key;
                },

                getValue: function () {
                    return this.value;
                },

                setValue: function (newValue) {
                    var oldValue = this.value;
                    this.value = newValue;
                    return oldValue;
                },

                equals: function (obj) {
                    if( obj === null || !qx.Class.hasInterface( obj.constructor, jsava.util.HashMap.Entry ) ) {
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
                    return (this.key === null ? 0 : this.key.hashCode()) ^
                        (this.value === null ? 0 : this.value.hashCode());
                },

                toString: function () {
                    return this.getKey() + '=' + this.getValue();
                },

                /**
                 * This method is invoked whenever the value in an entry is
                 * overwritten by an invocation of put(k,v) for a key k that's already
                 * in the HashMap.
                 * @protected
                 */
                recordAccess: function (map) {
                },

                /**
                 * This method is invoked whenever the entry is
                 * removed from the table.
                 * @protected
                 */
                recordRemoval: function (map) {
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
        threshold: 0,
        /** @type Number */
        loadFactor: 0,
        /** @type Number */
        modCount: 0,
        /** @implements jsava.util.Set */
        __entrySet: null,

        /**
         * @private
         * @type Class
         */
        EntrySet: null,
        /**
         * @private
         * @type Class
         */
        HashIterator: null,
        /**
         * @private
         * @type Class
         */
        ValueIterator: null,
        /**
         * @private
         * @type Class
         */
        KeyIterator: null,
        /**
         * @private
         * @type Class
         */
        EntryIterator: null,
        /**
         * @private
         * @type Class
         */
        KeySet: null,
        /**
         * @private
         * @type Class
         */
        Values: null,

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
                return this.getForNullKey();
            }

            var hash = this.self( arguments ).hash( key.hashCode() );
            for( var entry = this.table[this.self( arguments ).indexFor( hash, this.table.length )];
                 entry !== null; entry = entry.next ) {
                /** @type jsava.lang.Object */
                var k;
                if( entry.hash === hash && ((k = entry.key) === key || key.equals( k )) ) {
                    return entry.value;
                }
            }

            return null;
        },

        getForNullKey: function () {
            for( var entry = this.table[0]; entry !== null; entry = entry.next ) {
                if( entry.key === null ) {
                    return entry.value;
                }
            }

            return null;
        },

        containsKey: function (key) {
            return this.getEntry( key ) !== null;
        },

        getEntry: function (key) {
            var hash = (key === null) ? 0 : this.self( arguments ).hash( key.hashCode() );
            for( var entry = this.table[this.self( arguments ).indexFor( hash, this.table.length )];
                 entry !== null; entry = entry.next ) {
                /** @type jsava.lang.Object */
                var k;
                if( entry.hash === hash
                    && ( ( k = entry.key ) === key || ( key !== null && key.equals( k ) ) ) ) {
                    return entry;
                }
            }

            return null;
        },

        put: function (key, value) {
            if( key === null ) {
                return this.putForNullKey( value );
            }

            var hash = this.self( arguments ).hash( key.hashCode() ),
                i = this.self( arguments ).indexFor( hash, this.table.length );
            for( var entry = this.table[i]; entry !== null; entry = entry.next ) {
                /** @type jsava.lang.Object */
                var k;
                if( entry.hash === hash && ( (k = entry.key) === key || key.equals( k ) ) ) {
                    var oldValue = entry.value;
                    entry.value = value;
                    entry.recordAccess( this );
                    return oldValue;
                }
            }

            this.modCount++;
            this.addEntry( hash, key, value, i );
            return null;
        },

        /** @private */
        putForNullKey: function (value) {
            for( var entry = this.table[0]; entry !== null; entry = entry.next ) {
                if( entry.key === null ) {
                    var oldValue = entry.value;
                    entry.value = value;
                    entry.recordAccess( this );
                    return oldValue;
                }
            }

            this.modCount++;
            this.addEntry( 0, null, value, 0 );
            return null;
        },

        /** @private */
        putForCreate: function (key, value) {
            var hash = (key === null) ? 0 : this.self( arguments ).hash( key.hashCode() ),
                i = this.self( arguments ).indexFor( hash, this.table.length );
            for( var entry = this.table[i]; entry !== null; entry = entry.next ) {
                /** @type jsava.lang.Object */
                var k;
                if( entry.hash === hash
                    && ( (k = entry.key) === key || ( key !== null && key.equals( k ) ) ) ) {
                    entry.value = value;
                    return;
                }
            }

            this.createEntry( hash, key, value, i );
        },

        /** @private */
        putAllForCreate: function (map) {
            var iterator = map.entrySet().iterator();
            while( iterator.hasNext() ) {
                var entry = iterator.next();
                this.putForCreate( entry.getKey(), entry.getValue() );
            }
        },

        /** @protected */
        resize: function (newCapacity) {
            var oldTable = this.table,
                oldCapacity = oldTable.length;
            if( oldCapacity === this.self( arguments ).MAXIMUM_CAPACITY ) {
                this.threshold = jsava.lang.Integer.MAX_VALUE;
                return;
            }

            var newTable = jsava.Utils.arrayOfGivenSize( newCapacity, null );
            this.transfer( newTable );
            this.table = newTable;
            this.threshold = (newCapacity * this.loadFactor) | 0;
        },

        /** @protected */
        transfer: function (newTable) {
            var src = this.table,
                newCapacity = newTable.length;
            for( var j = 0; j < src.length; j++ ) {
                var entry = src[j];
                if( entry !== null ) {
                    src[j] = null;
                    do {
                        var next = entry.next,
                            i = this.self( arguments ).indexFor( entry.hash, newCapacity );
                        entry.next = newTable[i];
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

            if( numKeysToBeAdded > this.threshold ) {
                var targetCapacity = (numKeysToBeAdded / this.loadFactor + 1) | 0;
                if( targetCapacity > this.self( arguments ).MAXIMUM_CAPACITY ) {
                    targetCapacity = this.self( arguments ).MAXIMUM_CAPACITY;
                }

                var newCapacity = this.table.length;
                while( newCapacity < targetCapacity ) {
                    newCapacity <<= 1;
                }
                if( newCapacity > this.table.length ) {
                    this.resize( newCapacity );
                }
            }

            var iterator = map.entrySet().iterator();
            while( iterator.hasNext() ) {
                var entry = iterator.next();
                this.put( entry.getKey(), entry.getValue() );
            }
        },

        remove: function (key) {
            var entry = this.removeEntryForKey( key );
            return entry === null ? null : entry.value;
        },

        /** @protected */
        removeEntryForKey: function (key) {
            var hash = (key === null) ? 0 : this.self( arguments ).hash( key.hashCode() ),
                i = this.self( arguments ).indexFor( hash, this.table.length ),
                prev = this.table[i],
                entry = prev;

            while( entry !== null ) {
                var next = entry.next,
                    /** @type jsava.lang.Object */
                        k;
                if( entry.hash === hash
                    && ( (k = entry.key) === key || ( key !== null && key.equals( k ) ) ) ) {
                    this.modCount++;
                    this._size--;
                    if( prev === entry ) {
                        this.table[i] = next;
                    } else {
                        prev.next = next;
                    }
                    entry.recordRemoval( this );
                    return entry;
                }
                prev = entry;
                entry = next;
            }

            return entry;
        },

        /** @protected */
        removeMapping: function (obj) {
            if( obj === null || !qx.Class.hasInterface( obj.constructor, jsava.util.Map.Entry ) ) {
                return null;
            }

            /** @implements jsava.util.Map.Entry */
            var entry = obj,
                key = entry.getKey(),
                hash = (key === null) ? 0 : this.self( arguments ).hash( key.hashCode() ),
                i = this.self( arguments ).indexFor( hash, this.table.length ),
                prev = this.table[i],
                e = prev;

            while( e !== null ) {
                var next = e.next;
                if( e.hash === hash && e.equals( entry ) ) {
                    this.modCount++;
                    this._size--;
                    if( prev === e ) {
                        this.table[i] = next;
                    } else {
                        prev.next = next;
                    }
                    e.recordRemoval( this );
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
                return this.containsNullValue();
            }

            var table = this.table;
            for( var i = 0; i < table.length; i++ ) {
                for( var entry = table[i]; entry !== null; entry = entry.next ) {
                    if( value.equals( entry.value ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        /** @protected */
        containsNullValue: function () {
            var table = this.table;
            for( var i = 0; i < table.length; i++ ) {
                for( var entry = table[i]; entry !== null; entry = entry.next ) {
                    if( entry.value === null ) {
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

            result.table = jsava.Utils.arrayOfGivenSize( this.table.length, null );
            result.__entrySet = null;
            result.modCount = 0;
            result._size = 0;
            result.init();
            result.putAllForCreate( this );

            return result;
        },

        /** @protected */
        addEntry: function (hash, key, value, bucketIndex) {
            var entry = this.table[bucketIndex];
            this.table[bucketIndex] = new this.constructor.Entry( hash, key, value, entry );
            if( this._size++ >= this.threshold ) {
                this.resize( 2 * this.table.length );
            }
        },

        /** @protected */
        createEntry: function (hash, key, value, bucketIndex) {
            var entry = this.table[bucketIndex];
            this.table[bucketIndex] = new this.constructor.Entry( hash, key, value, entry );
            this._size++;
        },

        keySet: function () {
            var keySet = this._keySet;
            return keySet !== null ? keySet : ( this._keySet = new this.KeySet() );
        },

        values: function () {
            var values = this._values;
            return values !== null ? values : ( this._values = new this.Values() );
        },

        entrySet: function () {
            return this.entrySet0();
        },

        /** @private */
        entrySet0: function () {
            var entrySet = this.__entrySet;
            return entrySet !== null ? entrySet : ( this.__entrySet = new this.EntrySet() );
        },

        /** @protected */
        newKeyIterator: function () {
            return new this.KeyIterator();
        },

        /** @protected */
        newValueIterator: function () {
            return new this.ValueIterator();
        },

        /** @protected */
        newEntryIterator: function () {
            return new this.EntryIterator();
        }
    }
} );