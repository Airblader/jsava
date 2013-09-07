qx.Class.define( 'jsava.util.SubList', {
    extend: jsava.util.AbstractList,

    /**
     * @protected
     * @param {jsava.util.AbstractList} list
     * @param {Number} fromIndex
     * @param {Number} toIndex
     */
    construct: function (list, fromIndex, toIndex) {
        if( fromIndex < 0 ) {
            throw new jsava.util.IndexOutOfBoundsException( 'fromIndex = ' + fromIndex );
        }
        if( toIndex > list.size() ) {
            throw new jsava.util.IndexOutOfBoundsException( 'toIndex = ' + toIndex );
        }
        if( fromIndex > toIndex ) {
            throw new jsava.util.IllegalArgumentException( 'fromIndex(' + fromIndex + ') > toIndex(' + toIndex + ')' );
        }

        this.super( arguments );

        this.l = list;
        this.offset = fromIndex;
        this.__size = toIndex - fromIndex;
        this.expectedModCount = this.l.modCount;
    },

    members: {
        /**
         * @private
         * @implements jsava.util.AbstractList
         */
        l: null,
        /** @private */
        offset: 0,
        /** @private */
        __size: 0,
        /** @private */
        expectedModCount: 0,

        set: function (index, element) {
            this.rangeCheck( index );
            this.checkForComodification();
            return this.l.set( index + this.offset, element );
        },

        get: function (index) {
            this.rangeCheck( index );
            this.checkForComodification();
            return this.l.get( index + this.offset );
        },

        size: function () {
            this.checkForComodification();
            return this.__size;
        },

        add: function (index, element) {
            if( index < 0 || index > this.__size ) {
                throw new jsava.lang.IndexOutOfBoundsException();
            }

            this.checkForComodification();
            this.l.add( index + this.offset, element );
            this.expectedModCount = this.l.modCount;
            this.__size++;
            this.modCount++;
        },

        remove: function (index) {
            this.rangeCheck( index );
            this.checkForComodification();
            var result = this.l.remove( index + this.offset );
            this.expectedModCount = this.l.modCount;
            this.__size--;
            this.modCount++;

            return result;
        },

        removeRange: function (fromIndex, toIndex) {
            this.checkForComodification();
            this.l.removeRange( fromIndex + this.offset, toIndex + this.offset );
            this.expectedModCount = this.l.modCount;
            this.__size -= (toIndex - fromIndex);
            this.modCount++;
        },

        addAll: function () {
            if( arguments.length === 1 ) {
                return this.addAll( this.__size, arguments[0] );
            } else {
                var index = arguments[0],
                    /** @implements jsava.util.Collection */
                        collection = arguments[1];

                if( index < 0 || index > this.__size ) {
                    throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ', Size: ' + this.__size );
                }

                var cSize = collection.size();
                if( cSize === 0 ) {
                    return false;
                }

                this.checkForComodification();
                this.l.addAll( this.offset + index, collection );
                this.expectedModCount = this.l.modCount;
                this.__size += cSize;
                this.modCount++;

                return true;
            }
        },

        iterator: function () {
            return this.listIterator();
        },

        listIterator: function () {
            if( arguments.length === 0 ) {
                return this.super( arguments );
            }

            var index = arguments[0];

            this.checkForComodification();
            if( index < 0 || index > this.__size ) {
                throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ', Size: ' + this.__size );
            }

            return new (jsava.Utils.createAnonymousClass( {
                extend: jsava.lang.Object,
                implement: jsava.util.ListIterator,

                construct: function (thisSubList) {
                    this.__thisSubList = thisSubList;
                    this.iterator = this.__thisSubList.l.listIterator( index + this.__thisSubList.offset );
                },

                members: {
                    /** @type jsava.util.SubList */
                    __thisSubList: null,
                    /** @implements jsava.util.ListIterator */
                    iterator: null,

                    hasNext: function () {
                        return this.nextIndex() < this.__thisSubList.__size;
                    },

                    next: function () {
                        if( this.hasNext() ) {
                            return this.iterator.next();
                        } else {
                            throw new jsava.lang.NoSuchElementException();
                        }
                    },

                    hasPrevious: function () {
                        return this.previousIndex() >= 0;
                    },

                    previous: function () {
                        if( this.hasPrevious() ) {
                            return this.iterator.previous();
                        } else {
                            throw new jsava.lang.NoSuchElementException();
                        }
                    },

                    nextIndex: function () {
                        return this.iterator.nextIndex() - this.__thisSubList.offset;
                    },

                    previousIndex: function () {
                        return this.iterator.previousIndex() - this.__thisSubList.offset;
                    },

                    remove: function () {
                        this.iterator.remove();
                        this.__thisSubList.expectedModCount = this.__thisSubList.l.modCount;
                    },

                    set: function (element) {
                        this.iterator.set( element );
                    },

                    add: function (element) {
                        this.iterator.add( element );
                        this.__thisSubList.expectedModCount = this.__thisSubList.l.modCount;
                        this.__thisSubList.__size++;
                        this.__thisSubList.modCount++;
                    }
                }
            } ))( this );
        },

        subList: function (fromIndex, toIndex) {
            return new this.SubList( this, fromIndex, toIndex );
        },

        /** @private */
        rangeCheck: function (index) {
            if( index < 0 || index >= this.__size ) {
                throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ',Size: ' + this.__size );
            }
        },

        /** @private */
        checkForComodification: function () {
            if( this.l.modCount !== this.expectedModCount ) {
                throw new jsava.lang.ConcurrentModificationException();
            }
        }
    }
} );