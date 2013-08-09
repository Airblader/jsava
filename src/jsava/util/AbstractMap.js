qx.Class.define( 'jsava.util.AbstractMap', {
    extend: jsava.lang.Object,
    implement: jsava.util.Map,

    type: 'abstract',

    construct: function () {
    },

    members: {
        /** @type jsava.util.Set */
        _keySet: null,
        /** @type jsava.util.Collection */
        _values: null,

        entrySet: function () {
        },

        size: function () {
            return this.entrySet().size();
        },

        isEmpty: function () {
            return this.size() === 0;
        },

        containsValue: function (value) {
            // TODO rewrite others to use Iterator like this
            var iterator = this.entrySet().iterator();
            if( value === null ) {
                while( iterator.hasNext() ) {
                    var entry = iterator.next();
                    if( entry.getValue() === null ) {
                        return true;
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    var entry = iterator.next();
                    if( value.equals( entry.getValue() ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        containsKey: function (key) {
            // TODO rewrite to use iterator
            var entrySet = this.entrySet();
            if( key === null ) {
                for( var entry in entrySet ) {
                    if( entrySet.hasOwnProperty( entry ) && entrySet[entry].getKey() === null ) {
                        return true;
                    }
                }
            } else {
                for( var entry in entrySet ) {
                    if( entrySet.hasOwnProperty( entry ) && key.equals( entrySet[entry].getKey() ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        get: function (key) {
            var entrySet = this.entrySet();
            if( key === null ) {
                for( var entry in entrySet ) {
                    if( entrySet.hasOwnProperty( entry ) && entrySet[entry].getKey() === null ) {
                        return entrySet[entry].getValue();
                    }
                }
            } else {
                for( var entry in entrySet ) {
                    if( entrySet.hasOwnProperty( entry ) && key.equals( entrySet[entry].getKey() ) ) {
                        return entrySet[entry].getValue();
                    }
                }
            }

            return null;
        },

        put: function (key, value) {
            throw new jsava.lang.UnsupportedOperationException();
        },

        remove: function (key) {
            // TODO implement
            throw new jsava.lang.UnsupportedOperationException();
        },

        putAll: function (map) {
            var entrySet = map.entrySet();
            for( var entry in entrySet ) {
                this.put( entrySet[entry].getKey(), entrySet[entry].getValue() );
            }
        },

        clear: function () {
            // TODO implement
            throw new jsava.lang.UnsupportedOperationException();
        },

        keySet: function () {
            // TODO see jsava implementation
            return this._keySet;
        },

        values: function () {
            // TODO see jsava implementation
            return this._values;
        },

        equals: function (other) {
            if( other === this ) {
                return true;
            }

            if( !other.hasInterface( jsava.util.Map ) ) {
                return false;
            }

            if( other.size() !== this.size() ) {
                return false;
            }

            // TODO the rest of comparison
            return true;
        },

        hashCode: function () {
            // TODO implement
            return this.base( arguments );
            //throw new jsava.lang.UnsupportedOperationException();
        },

        toString: function () {
            // TODO implement
            throw new jsava.lang.UnsupportedOperationException();
        },

        clone: function () {
            // TODO implement
            throw new jsava.lang.UnsupportedOperationException();
        }
    }
} );