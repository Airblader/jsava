qx.Class.define( 'jsava.util.LinkedHashMap', {
    extend: jsava.util.HashMap,
    implement: jsava.util.Map,

    construct: function () {
        var args = Array.prototype.slice.call( arguments );

        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
        this.accessOrder = args.length === 3 ? args[2] : false;
    },

    statics: {
        /** @private */
        serialVersionUID: 3801124242820219
    },

    members: {
        /**
         * @private
         * @type {jsava.util.LinkedHashMap.Entry}
         */
        header: null,

        /** @private */
        accessOrder: false,

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