qx.Class.define( 'java.util.AbstractMap', {
    extend: qx.core.Object,
    implement: java.util.Map,

    type: 'abstract',

    construct: function () {
    },

    members: {
        /** @type java.util.Set */
        _keySet: null,
        /** @type java.util.Collection */
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
            var entrySet = this.entrySet();
            if( value === null ) {
                for( var entry in entrySet ) {
                    if( entrySet.hasOwnProperty( entry ) && entrySet[entry].getValue() === null ) {
                        return true;
                    }
                }
            } else {
                for( var entry in entrySet ) {
                    if( entrySet.hasOwnProperty( entry ) && value.equals( entrySet[entry].getValue() ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        containsKey: function (key) {
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
            throw new java.lang.UnsupportedOperationException();
        },

        remove: function (key) {
            // TODO implement
            throw new java.lang.UnsupportedOperationException();
        },

        putAll: function (map) {
            var entrySet = map.entrySet();
            for( var entry in entrySet ) {
                this.put( entrySet[entry].getKey(), entrySet[entry].getValue() );
            }
        },

        clear: function () {
            // TODO implement
            throw new java.lang.UnsupportedOperationException();
        },

        keySet: function () {
            // TODO see java implementation
            return this._keySet;
        },

        values: function () {
            // TODO see java implementation
            return this._values;
        },

        equals: function (other) {
            // TODO does this even work?
            if( other === this ) {
                return true;
            }

            if( !other.hasInterface( java.util.Map ) ) {
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
            throw new java.lang.UnsupportedOperationException();
        },

        toString: function () {
            // TODO implement
            throw new java.lang.UnsupportedOperationException();
        },

        clone: function () {
            // TODO implement
            throw new java.lang.UnsupportedOperationException();
        }
    }
} );