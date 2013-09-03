qx.Class.define( 'jsava.util.LinkedHashMap', {
    extend: jsava.util.HashMap,
    implement: jsava.util.Map,

    construct: function () {
        var args = Array.prototype.slice.call( arguments );

        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
        this.accessOrder = args.length === 3 ? args[2] : false;

        var thisLinkedHashMap = this;

        this.LinkedHashIterator = jsava.JsavaUtils.createAnonymousClass( {
            extend: jsava.lang.Object,
            implement: jsava.util.Iterator,

            type: 'abstract',

            members: {
                /**
                 * @protected
                 * @type {jsava.util.LinkedHashMap.Entry}
                 */
                _nextEntry: thisLinkedHashMap.header.after,
                /**
                 * @protected
                 * @type {jsava.util.LinkedHashMap.Entry}
                 */
                lastReturned: null,

                expectedModCount: thisLinkedHashMap.modCount,

                hasNext: function () {
                    return this._nextEntry !== thisLinkedHashMap.header;
                },

                remove: function () {
                    if( this.lastReturned === null ) {
                        throw new jsava.lang.IllegalStateException();
                    }

                    if( thisLinkedHashMap.modCount !== this.expectedModCount ) {
                        throw new jsava.lang.ConcurrentModificationException();
                    }

                    thisLinkedHashMap.remove( this.lastReturned.key );
                    this.lastReturned = null;
                    this.expectedModCount = thisLinkedHashMap.modCount;
                },

                nextEntry: function () {
                    if( thisLinkedHashMap.modCount !== this.expectedModCount ) {
                        throw new jsava.lang.ConcurrentModificationException();
                    }

                    if( this._nextEntry === thisLinkedHashMap.header ) {
                        throw new jsava.lang.NoSuchElementException();
                    }

                    var entry = this.lastReturned = this._nextEntry;
                    this._nextEntry = entry.after;
                    return entry;
                }
            }
        } );

        this.KeyIterator = jsava.JsavaUtils.createAnonymousClass( {
            extend: thisLinkedHashMap.LinkedHashIterator,

            members: {
                next: function () {
                    return this.nextEntry().getKey();
                }
            }
        } );

        this.ValueIterator = jsava.JsavaUtils.createAnonymousClass( {
            extend: thisLinkedHashMap.LinkedHashIterator,

            members: {
                next: function () {
                    return this.nextEntry().value;
                }
            }
        } );

        this.EntryIterator = jsava.JsavaUtils.createAnonymousClass( {
            extend: thisLinkedHashMap.LinkedHashIterator,

            members: {
                next: function () {
                    return this.nextEntry();
                }
            }
        } );
    },

    statics: {
        /** @private */
        serialVersionUID: 3801124242820219,

        Entry: qx.Class.define( 'jsava.util.LinkedHashMap.Entry', {
            extend: jsava.util.HashMap.Entry,

            /**
             * @param {Number} hash
             * @param key
             * @param value
             * @param {jsava.util.HashMap.Entry} next
             */
            construct: function (hash, key, value, next) {
                this.base( arguments, hash, key, value, next );
            },

            members: {
                /**
                 * @protected
                 * @type {jsava.util.LinkedHashMap.Entry}
                 */
                before: null,
                /**
                 * @protected
                 * @type {jsava.util.LinkedHashMap.Entry}
                 */
                after: null,

                /** @private */
                remove: function () {
                    this.before.after = this.after;
                    this.after.before = this.before;
                },

                /**
                 * @private
                 * @param {jsava.util.LinkedHashMap.Entry} existingEntry
                 */
                addBefore: function (existingEntry) {
                    this.after = existingEntry;
                    this.before = existingEntry.before;
                    this.before.after = this;
                    this.after.before = this;
                },

                recordAccess: function (map) {
                    /** @type jsava.util.LinkedHashMap */
                    var linkedMap = map;

                    if( linkedMap.accessOrder ) {
                        linkedMap.modCount++;
                        this.remove();
                        this.addBefore( linkedMap.header );
                    }
                },

                recordRemoval: function (map) {
                    this.remove();
                }
            }
        } )
    },

    members: {
        /**
         * @private
         * @type {jsava.util.LinkedHashMap.Entry}
         */
        header: null,

        /** @private */
        accessOrder: false,

        /**
         * @private
         * @abstract
         * @type Class
         */
        LinkedHashIterator: null,

        /**
         * @private
         * @type Class
         */
        KeyIterator: null,
        /**
         * @private
         * @type Class
         */
        ValueIterator: null,
        /**
         * @private
         * @type Class
         */
        EntryIterator: null,

        init: function () {
            // TODO initialize as new Entry<K,V>(-1, null, null, null)
            this.header = null;
            this.header.before = this.header.after = this.header;
        },

        transfer: function (newTable) {
            var newCapacity = newTable.length;
            for( var entry = this.header.after; entry !== this.header; entry = entry.after ) {
                var index = this.indexFor( entry.hash, newCapacity );
                entry.next = newTable[index];
                newTable[index] = entry;
            }
        },

        containsValue: function (value) {
            if( value === null ) {
                for( var entry = this.header.after; entry !== this.header; entry = entry.after ) {
                    if( entry.value === null ) {
                        return true;
                    }
                }
            } else {
                for( var entry = this.header.after; entry !== this.header; entry = entry.after ) {
                    if( value.equals( entry.value ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        get: function (key) {
            var entry = this._getEntry( key );
            if( entry === null ) {
                return null;
            }

            entry.recordAccess( this );
            return entry.value;
        },

        clear: function () {
            this.base( arguments );
            this.header.before = this.header.after = this.header;
        }
    }
} );