qx.Class.define( 'jsava.util.AbstractSet', {
    extend: jsava.util.AbstractCollection,
    implement: [jsava.util.Set],

    type: 'abstract',

    /** @protected */
    construct: function () {
    },

    members: {
        equals: function (obj) {
            if( obj === this ) {
                return true;
            }

            if( obj === null ) {
                return false;
            }

            if( !qx.Class.implementsInterface( obj, jsava.util.Set ) ) {
                return false;
            }

            /** @implements jsava.util.Collection */
            var collection = obj;

            if( collection.size() !== this.size() ) {
                return false;
            }

            try {
                return this.containsAll( collection );
            } catch( e ) {
                if( qx.Class.isSubClassOf( e.constructor, jsava.lang.ClassCastException )
                    || qx.Class.isSubClassOf( e.constructor, jsava.lang.NullPointerException ) ) {
                    return false;
                }

                throw e;
            }
        },

        hashCode: function () {
            var hashCode = 0,
                iterator = this.iterator();
            while( iterator.hasNext() ) {
                var obj = iterator.next();
                if( obj !== null ) {
                    hashCode += obj.hashCode();
                }
            }

            return hashCode;
        },

        removeAll: function (collection) {
            var modified = false;

            if( this.size > collection.size() ) {
                var iterator = collection.iterator();
                while( iterator.hasNext() ) {
                    modified = this.remove( iterator.next() ) || modified;
                }
            } else {
                var iterator = this.iterator();
                while( iterator.hasNext() ) {
                    if( collection.contains( iterator.next() ) ) {
                        iterator.remove();
                        modified = true;
                    }
                }
            }

            return modified;
        }
    }
} );