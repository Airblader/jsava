qx.Class.define( 'jsava.util.AbstractList', {
    extend: jsava.util.AbstractCollection,
    implement: jsava.util.List,

    type: 'abstract',

    /** @protected */
    construct: function () {
    },

    members: {
        /** @protected */
        modCount: 0,

        add: function () {
            if( arguments.length === 1 ) {
                this.add( this.size(), arguments[0] );
                return true;
            }

            // add(index, element) needs to be implemented in the child class
            // add(element) shall either be overridden or call this.base(arguments)
            throw new jsava.lang.UnsupportedOperationException();
        },

        /** @abstract */
        get: function (index) {
        },

        set: function (index, element) {
            throw new jsava.lang.UnsupportedOperationException();
        },

        remove: function (index) {
            throw new jsava.lang.UnsupportedOperationException();
        },

        indexOf: function (obj) {
            var iterator = this.listIterator();
            if( obj === null ) {
                while( iterator.hasNext() ) {
                    if( iterator.next() === null ) {
                        return iterator.previousIndex();
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    if( obj.equals( iterator.next() ) ) {
                        return iterator.previousIndex();
                    }
                }
            }

            return -1;
        },

        lastIndexOf: function (obj) {
            var iterator = this.listIterator( this.size() );
            if( obj === null ) {
                while( iterator.hasPrevious() ) {
                    if( iterator.previous() === null ) {
                        return iterator.previousIndex();
                    }
                }
            } else {
                while( iterator.hasPrevious() ) {
                    if( obj.equals( iterator.previous() ) ) {
                        return iterator.previousIndex();
                    }
                }
            }

            return -1;
        },

        clear: function () {
            this.removeRange( 0, this.size() );
        },

        addAll: function (index, collection) {
            var modified = false,
                iterator = collection.iterator();
            while( iterator.hasNext() ) {
                this.add( index++, iterator.next() );
                modified = true;
            }

            return modified;
        },

        iterator: function () {
            return new this.Itr();
        },

        listIterator: function () {
            if( arguments.length === 0 ) {
                return this.listIterator( 0 );
            }

            var index = arguments[0];
            if( index < 0 || index > this.size() ) {
                throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index );
            }

            return new this.ListItr( index );
        },

        subList: function (fromIndex, toIndex) {
            return (qx.Interface.objectImplements( this, jsava.util.RandomAccess ) ?
                new jsava.util.RandomAccessSubList( this, fromIndex, toIndex ) :
                new jsava.util.SubList( this, fromIndex, toIndex ))
        },

        equals: function (other) {
            if( other === this ) {
                return true;
            }

            if( other === null ) {
                return false;
            }

            if( !qx.Interface.objectImplements( other, jsava.util.List ) ) {
                return false;
            }

            /** @type jsava.util.List */
            var list = other;

            var iterator1 = this.listIterator(),
                iterator2 = list.listIterator();
            while( iterator1.hasNext() && iterator2.hasNext() ) {
                var element1 = iterator1.next(),
                    object2 = iterator2.next();
                if( !( element1 === null ? object2 === null : element1.equals( object2 ) ) ) {
                    return false;
                }
            }

            return !( iterator1.hasNext() || iterator2.hasNext() );
        },

        hashCode: function () {
            var hashCode = 1,
                iterator = this.iterator();
            while( iterator.hasNext() ) {
                var obj = iterator.next();
                hashCode = 31 * hashCode + (obj === null ? 0 : obj.hashCode());
            }

            return hashCode;
        },

        /**
         * @protected
         * @param {Number} fromIndex
         * @param {Number} toIndex
         */
        removeRange: function (fromIndex, toIndex) {
            var iterator = this.listIterator( fromIndex );
            for( var i = 0, n = toIndex - fromIndex; i < n; i++ ) {
                iterator.next();
                iterator.remove();
            }
        },

        /** @private */
        Itr: qx.Class.define( 'jsava.util.AbstractList.Itr', {
            implement: jsava.util.Iterator,

            /** @private */
            construct: function (thisAbstractList) {
                this.__thisAbstractList = thisAbstractList;
                this.expectedModCount = this.__thisAbstractList._modCount;
            },

            members: {
                __thisAbstractList: null,

                /** @protected */
                cursor: 0,
                /** @protected */
                lastRet: -1,
                /**
                 * @protected
                 * @type Number
                 */
                expectedModCount: 0,

                hasNext: function () {
                    return this.cursor !== this.__thisAbstractList.size();
                },

                next: function () {
                    this.checkForComodification();

                    try {
                        var next = this.__thisAbstractList.get( this.cursor );
                        this.lastRet = this.cursor++;
                        return next;
                    } catch( e ) {
                        if( qx.Class.isSubClassOf( e.constructor, jsava.lang.IndexOutOfBoundsException ) ) {
                            this.checkForComodification();
                            throw new jsava.lang.NoSuchElementException();
                        }

                        throw e;
                    }
                },

                remove: function () {
                    if( this.lastRet === -1 ) {
                        throw new jsava.lang.IllegalStateException();
                    }
                    this.checkForComodification();

                    try {
                        this.__thisAbstractList.remove( this.lastRet );
                        if( this.lastRet < this.cursor ) {
                            this.cursor--;
                        }
                        this.lastRet = -1;
                        this.expectedModCount = this.__thisAbstractList._modCount;
                    } catch( e ) {
                        if( qx.Class.isSubClassOf( e.constructor, jsava.lang.IndexOutOfBoundsException ) ) {
                            throw new jsava.lang.ConcurrentModificationException();
                        }

                        throw e;
                    }
                },

                /** @protected */
                checkForComodification: function () {
                    if( this.__thisAbstractList._modCount !== this.expectedModCount ) {
                        throw new jsava.lang.ConcurrentModificationException();
                    }
                }
            }
        } ),

        /** @private */
        ListItr: qx.Class.define( 'jsava.util.AbstractList.ListItr', {
            extend: jsava.util.AbstractList.Itr,
            implement: jsava.util.ListIterator,

            /** @private */
            construct: function (thisAbstractList, index) {
                this.base( arguments, thisAbstractList );
                this.cursor = index;
            },

            members: {
                hasPrevious: function () {
                    return this.cursor !== 0;
                },

                previous: function () {
                    this.checkForComodification();
                    try {
                        var i = this.cursor - 1,
                            previous = this.__thisAbstractList.get( i );
                        this.lastRet = this.cursor = i;
                        return previous;
                    } catch( e ) {
                        if( qx.Class.isSubClassOf( e.constructor, jsava.lang.IndexOutOfBoundsException ) ) {
                            this.checkForComodification();
                            throw new jsava.lang.NoSuchElementException();
                        }

                        throw e;
                    }
                },

                nextIndex: function () {
                    return this.cursor;
                },

                previousIndex: function () {
                    return this.cursor - 1;
                },

                set: function (element) {
                    if( this.lastRet === 1 ) {
                        throw new jsava.lang.IllegalStateException();
                    }
                    this.checkForComodification();

                    try {
                        this.__thisAbstractList.set( this.lastRet, element );
                        this.expectedModCount = this.__thisAbstractList._modCount;
                    } catch( e ) {
                        if( qx.Class.isSubClassOf( e.constructor, jsava.lang.IndexOutOfBoundsException ) ) {
                            throw new jsava.lang.ConcurrentModificationException();
                        }

                        throw e;
                    }
                },

                add: function (element) {
                    this.checkForComodification();
                    try {
                        this.__thisAbstractList.add( this.cursor++, element );
                        this.lastRet = -1;
                        this.expectedModCount = this.__thisAbstractList._modCount;
                    } catch( e ) {
                        if( qx.Class.isSubClassOf( e.constructor, jsava.lang.IndexOutOfBoundsException ) ) {
                            throw new jsava.lang.ConcurrentModificationException();
                        }

                        throw e;
                    }
                }
            }
        } )
    }
} );