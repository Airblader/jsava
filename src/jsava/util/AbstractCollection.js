qx.Class.define( 'jsava.util.AbstractCollection', {
    extend: jsava.lang.Object,
    implement: [jsava.util.Collection],

    type: 'abstract',

    /** @protected */
    construct: function () {
    },

    members: {
        /** @abstract */
        iterator: function () {
        },

        /** @abstract */
        size: function () {
        },

        isEmpty: function () {
            return this.size() === 0;
        },

        contains: function (obj) {
            var iterator = this.iterator();
            if( obj === null ) {
                while( iterator.hasNext() ) {
                    if( iterator.next() === null ) {
                        return true;
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    if( obj.equals( iterator.next() ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        toArray: function () {
            if( Array.prototype.slice.call( arguments ).length !== 0 ) {
                // TODO overloaded signature
                throw new jsava.lang.UnsupportedOperationException();
            }

            /** @type jsava.lang.Object[] */
            var result = [],
                iterator = this.iterator();
            while( iterator.hasNext() ) {
                result.push( iterator.next() );
            }

            return result;
        },

        add: function (elem) {
            throw new jsava.lang.UnsupportedOperationException();
        },

        remove: function (obj) {
            var iterator = this.iterator();
            if( obj === null ) {
                while( iterator.hasNext() ) {
                    if( iterator.next() === null ) {
                        iterator.remove();
                        return true;
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    if( obj.equals( iterator.next() ) ) {
                        iterator.remove();
                        return true;
                    }
                }
            }

            return false;
        },

        containsAll: function (collection) {
            var iterator = collection.iterator();
            while( iterator.hasNext() ) {
                if( !this.contains( iterator.next() ) ) {
                    return false;
                }
            }

            return true;
        },

        addAll: function (collection) {
            var modified = false,
                iterator = collection.iterator();
            while( iterator.hasNext() ) {
                if( this.add( iterator.next() ) ) {
                    modified = true;
                }
            }

            return modified;
        },

        removeAll: function (collection) {
            var modified = false,
                iterator = this.iterator();
            while( iterator.hasNext() ) {
                if( collection.contains( iterator.next() ) ) {
                    iterator.remove();
                    modified = true;
                }
            }

            return modified;
        },

        retainAll: function (collection) {
            var modified = false,
                iterator = this.iterator();
            while( iterator.hasNext() ) {
                if( !collection.contains( iterator.next() ) ) {
                    iterator.remove();
                    modified = true;
                }
            }

            return modified;
        },

        clear: function () {
            var iterator = this.iterator();
            while( iterator.hasNext() ) {
                iterator.next();
                iterator.remove();
            }
        },

        toString: function () {
            var iterator = this.iterator();
            if( !iterator.hasNext() ) {
                return '[]';
            }

            // TODO use StringBuilder
            var result = '[';
            for( ; ; ) {
                var element = iterator.next();
                result += element === this ? '(this Collection)' : element;
                if( !iterator.hasNext() ) {
                    return result + ']';
                }

                result += ', ';
            }
        }
    }
} );