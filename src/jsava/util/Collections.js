defineClass( 'jsava.util.Collections', {
    extend: jsava.lang.Object,

    type: 'static',

    statics: {
        /**
         * Note : This is not actually synchronized as Javascript has no such feature
         *
         * @public
         * @static
         * @returns {jsava.util.List}
         */
        synchronizedList: function () {
            var args = Array.prototype.slice.call( arguments ),
                list = args[0],
                mutex;

            if( args.length === 1 ) {
                mutex = this;
            } else {
                mutex = args[1];
            }

            return qx.Class.hasInterface( list.constructor, jsava.util.RandomAccess ) ?
                new jsava.util.Collections.SynchronizedRandomAccessList( list, mutex ) :
                new jsava.util.Collections.SynchronizedList( list, mutex );
        },

        /**
         * Note : This is not actually synchronized as Javascript has no such feature
         */
        SynchronizedCollection: defineClass( 'jsava.util.Collections.SynchronizedCollection', {
            extend: jsava.lang.Object,
            implement: [jsava.util.Collection, jsava.io.Serializable],

            construct: function () {
                var args = Array.prototype.slice.call( arguments ),
                    collection = args[0];

                this.super( arguments );

                if( args.length === 1 ) {
                    if( collection === null ) {
                        throw new jsava.lang.NullPointerException();
                    }

                    this.collection = collection;
                    this.mutex = this;
                } else {
                    this.collection = collection;
                    this.mutex = args[1];
                }
            },

            statics: {
                /** @private */
                serialVersionUID: 3053995032091335
            },

            members: {
                /**
                 * @protected
                 * @type {jsava.util.Collection}
                 */
                collection: null,
                /**
                 * @protected
                 * @type {jsava.lang.Object}
                 */
                mutex: null,

                size: function () {
                    return this.collection.size();
                },

                isEmpty: function () {
                    return this.collection.isEmpty();
                },

                contains: function (obj) {
                    return this.collection.contains( obj );
                },

                toArray: function () {
                    return this.collection.toArray();
                },

                iterator: function () {
                    return this.collection.iterator();
                },

                add: function (element) {
                    return this.collection.add( element );
                },

                remove: function (obj) {
                    return this.collection.remove( obj );
                },

                containsAll: function (collection) {
                    return this.collection.containsAll( collection );
                },

                addAll: function (collection) {
                    return this.addAll( collection );
                },

                removeAll: function (collection) {
                    return this.collection.removeAll( collection );
                },

                retainAll: function (collection) {
                    return this.collection.retainAll( collection );
                },

                clear: function () {
                    this.collection.clear();
                },

                toString: function () {
                    return this.collection.toString();
                },

                writeObject: function () {
                    throw new jsava.lang.UnsupportedOperationException();
                }
            }
        } ),

        /**
         * Note : This is not actually synchronized as Javascript has no such feature
         */
        SynchronizedList: defineClass( 'jsava.util.Collections.SynchronizedList', {
            extend: jsava.util.Collections.SynchronizedCollection,
            implement: jsava.util.List,

            construct: function () {
                var args = Array.prototype.slice.call( arguments ),
                    list = args[0];

                if( args.length === 1 ) {
                    this.super( arguments, list );
                } else {
                    this.super( arguments, list, args[1] );
                }

                this.list = list;
            },

            statics: {
                /** @private */
                serialVersionUID: 7754090372962971
            },

            members: {
                /**
                 * @protected
                 * @type {jsava.util.List}
                 */
                list: null,

                equals: function (other) {
                    if( this === other ) {
                        return true;
                    }

                    return this.list.equals( other );
                },

                hashCode: function () {
                    return this.list.hashCode();
                },

                get: function (index) {
                    return this.list.get( index );
                },

                set: function (index, element) {
                    return this.list.set( index, element );
                },

                add: function (index, element) {
                    this.list.add( index, element );
                },

                remove: function (index) {
                    return this.list.remove( index );
                },

                indexOf: function (obj) {
                    return this.list.indexOf( obj );
                },

                lastIndexOf: function (obj) {
                    return this.list.lastIndexOf( obj );
                },

                addAll: function (collection) {
                    return this.list.addAll( collection );
                },

                listIterator: function () {
                    return this.list.listIterator.apply( this.list, arguments );
                },

                subList: function (fromIndex, toIndex) {
                    return new jsava.util.Collections.SynchronizedList( this.list.subList( fromIndex, toIndex ),
                        this.mutex );
                }
            }
        } ),

        /**
         * Note : This is not actually synchronized as Javascript has no such feature
         */
        SynchronizedRandomAccessList: defineClass( 'jsava.util.Collections.SynchronizedRandomAccessList', {
            extend: jsava.util.Collections.SynchronizedList,
            implement: jsava.util.RandomAccess,

            construct: function () {
                var args = Array.prototype.slice.call( arguments ),
                    list = args[0];

                if( args.length === 1 ) {
                    this.super( arguments, list );
                } else {
                    this.super( arguments, list, args[1] );
                }
            },

            statics: {
                /** @private */
                serialVersionUID: 1530674583602358
            },

            members: {
                subList: function (fromIndex, toIndex) {
                    return new jsava.util.Collections.SynchronizedRandomAccessList( this.list.subList( fromIndex, toIndex ),
                        this.mutex );
                },

                writeReplace: function () {
                    throw new jsava.lang.UnsupportedOperationException();
                }
            }
        } )

        // TODO everything else in this class
    }
} );