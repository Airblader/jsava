qx.Class.define( 'jsava.util.Vector', {
    extend: jsava.util.AbstractList,
    implement: [jsava.util.List, jsava.util.RandomAccess, jsava.lang.Cloneable, jsava.io.Serializable],

    construct: function () {
        var args = Array.prototype.slice.call( arguments );
        if( args.length === 1 && qx.Class.hasInterface( args[0].constructor, jsava.util.Collection ) ) {
            /** @type jsava.util.Collection */
            var collection = args[0];

            this.super( arguments );

            this.elementData = collection.toArray();
            this.elementCount = this.elementData.length;
        } else {
            var initialCapacity = args.length !== 0 ? args[0] : 10,
                capacityIncrement = args.length === 2 ? args[1] : 0;

            this.super( arguments );

            if( initialCapacity < 0 ) {
                throw new jsava.lang.IllegalArgumentException( 'Illegal Capacity: ' + initialCapacity );
            }

            this.elementData = jsava.Utils.arrayOfGivenSize( initialCapacity, null );
            this.capacityIncrement = capacityIncrement;
        }
    },

    statics: {
        /** @private */
        serialVersionUID: -2767605614048989
    },

    members: {
        /**
         * @protected
         * @type {jsava.lang.Object[]}
         */
        elementData: null,
        /** @protected */
        elementCount: 0,
        /** @protected */
        capacityIncrement: 0,

        /**
         * @public
         * @param {jsava.lang.Object[]} anArray
         */
        copyInto: function (anArray) {
            jsava.lang.System.arraycopy( this.elementData, 0, anArray, 0, this.elementCount );
        },

        /** @public */
        trimToSize: function () {
            this.modCount++;
            var oldCapacity = this.elementData.length;
            if( this.elementCount < oldCapacity ) {
                this.elementData = jsava.util.Arrays.copyOf( this.elementData, this.elementCount );
            }
        },

        /**
         * @public
         * @param {Number} minCapacity
         */
        ensureCapacity: function (minCapacity) {
            this.modCount++;
            this.ensureCapacityHelper( minCapacity );
        },

        /**
         * @private
         * @param {Number} minCapacity
         */
        ensureCapacityHelper: function (minCapacity) {
            var oldCapacity = this.elementData.length;
            if( minCapacity > oldCapacity ) {
                var oldData = this.elementData,
                    newCapacity =
                        (this.capacityIncrement > 0) ? (oldCapacity + this.capacityIncrement) : (oldCapacity * 2);
                if( newCapacity < minCapacity ) {
                    newCapacity = minCapacity;
                }

                this.elementData = jsava.util.Arrays.copyOf( this.elementData, newCapacity );
            }
        },

        /**
         * @public
         * @param {Number} newSize
         */
        setSize: function (newSize) {
            this.modCount++;
            if( newSize > this.elementCount ) {
                this.ensureCapacityHelper( newSize );
            } else {
                for( var i = newSize; i < this.elementCount; i++ ) {
                    this.elementData[i] = null;
                }
            }

            this.elementCount = newSize;
        },

        /**
         * @public
         * @returns {Number}
         */
        capacity: function () {
            return this.elementData.length;
        },

        size: function () {
            return this.elementCount;
        },

        isEmpty: function () {
            return this.elementCount === 0;
        },

        /**
         * @public
         * @returns {jsava.util.Enumeration}
         */
        elements: function () {
            var thisVector = this;

            return new ( jsava.Utils.createAnonymousClass( {
                extend: jsava.lang.Object,
                implement: jsava.util.Enumeration,

                members: {
                    /** @protected */
                    count: 0,

                    hasMoreElements: function () {
                        return this.count < thisVector.elementCount;
                    },

                    nextElement: function () {
                        if( this.count < thisVector.elementCount ) {
                            return thisVector.elementData[this.count++];
                        }

                        throw new jsava.lang.NoSuchElementException( 'Vector Enumeration' );
                    }
                }
            } ) )();
        },

        contains: function (obj) {
            return this.indexOf( obj, 0 ) >= 0;
        },

        indexOf: function () {
            var args = Array.prototype.slice.call( arguments ),
                obj = args[0],
                i;

            if( args.length === 1 ) {
                return this.indexOf( obj, 0 );
            }

            var index = args[1];

            if( obj === null ) {
                for( i = index; i < this.elementCount; i++ ) {
                    if( this.elementData[i] === null ) {
                        return i;
                    }
                }
            } else {
                for( i = index; i < this.elementCount; i++ ) {
                    if( obj.equals( this.elementData[i] ) ) {
                        return i;
                    }
                }
            }

            return -1;
        },

        lastIndexOf: function () {
            var args = Array.prototype.slice.call( arguments ),
                obj = args[0],
                i;

            if( args.length === 1 ) {
                return this.lastIndexOf( obj, this.elementCount - 1 );
            }

            var index = args[1];
            if( index >= this.elementCount ) {
                throw new jsava.lang.IndexOutOfBoundsException( index + ' >= ' + this.elementCount );
            }

            if( obj === null ) {
                for( i = index; i >= 0; i-- ) {
                    if( this.elementData[i] === null ) {
                        return i;
                    }
                }
            } else {
                for( i = index; i >= 0; i-- ) {
                    if( obj.equals( this.elementData[i] ) ) {
                        return i;
                    }
                }
            }

            return -1;
        },

        /**
         * @public
         * @param {Number} index
         * @returns {jsava.lang.Object}
         */
        elementAt: function (index) {
            if( index >= this.elementCount ) {
                throw new jsava.lang.ArrayIndexOutOfBoundsException( index + ' >= ' + this.elementCount );
            }

            return this.elementData[index];
        },

        /**
         * @public
         * @returns {jsava.lang.Object}
         */
        firstElement: function () {
            if( this.elementCount === 0 ) {
                throw new jsava.lang.NoSuchElementException();
            }

            return this.elementData[0];
        },

        /**
         * @public
         * @returns {jsava.lang.Object}
         */
        lastElement: function () {
            if( this.elementCount === 0 ) {
                throw new jsava.lang.NoSuchElementException();
            }

            return this.elementData[this.elementCount - 1];
        },

        /**
         * @public
         * @param {jsava.lang.Object} obj
         * @param {Number} index
         */
        setElementAt: function (obj, index) {
            if( index >= this.elementCount ) {
                throw new jsava.lang.ArrayIndexOutOfBoundsException( index + ' >= ' + this.elementCount );
            }

            this.elementData[index] = obj;
        },

        /**
         * @public
         * @param {Number} index
         */
        removeElementAt: function (index) {
            this.modCount++;
            if( index >= this.elementCount ) {
                throw new jsava.lang.ArrayIndexOutOfBoundsException( index + ' >= ' + this.elementCount );
            } else if( index < 0 ) {
                throw new jsava.lang.ArrayIndexOutOfBoundsException( index );
            }

            var j = this.elementCount - index - 1;
            if( j > 0 ) {
                jsava.lang.System.arraycopy( this.elementData, index + 1, this.elementData, index, j );
            }

            this.elementCount--;
            this.elementData[this.elementCount] = null;
        },

        /**
         * @public
         * @param {jsava.lang.Object} obj
         * @param {Number} index
         */
        insertElementAt: function (obj, index) {
            this.modCount++;
            if( index > this.elementCount ) {
                throw new jsava.lang.ArrayIndexOutOfBoundsException( index + ' >= ' + this.elementCount );
            }

            this.ensureCapacityHelper( this.elementCount + 1 );
            jsava.lang.System.arraycopy( this.elementData, index, this.elementData, index + 1,
                this.elementCount - index );
            this.elementData[index] = obj;
            this.elementCount++;
        },

        /**
         * @public
         * @param {jsava.lang.Object} obj
         */
        addElement: function (obj) {
            this.modCount++;
            this.ensureCapacityHelper( this.elementCount + 1 );
            this.elementData[this.elementCount++] = obj;
        },

        /**
         * @public
         * @param {jsava.lang.Object} obj
         * @returns {Boolean}
         */
        removeElement: function (obj) {
            this.modCount++;
            var i = this.indexOf( obj );
            if( i >= 0 ) {
                this.removeElementAt( i );
                return true;
            }

            return false;
        },

        /** @public */
        removeAllElements: function () {
            this.modCount++;
            for( var i = 0; i < this.elementCount; i++ ) {
                this.elementData[i] = null;
            }

            this.elementCount = 0;
        },

        clone: function () {
            try {
                var vector = this.super( arguments );
                vector.elementData = jsava.util.Arrays.copyOf( this.elementData, this.elementCount );
                vector.modCount = 0;

                return vector;
            } catch( e ) {
                if( qx.Class.isSubClassOf( e.constructor, jsava.lang.CloneNotSupportedException ) ) {
                    throw new jsava.lang.InternalError();
                }

                throw e;
            }
        },

        toArray: function () {
            return jsava.util.Arrays.copyOf( this.elementData, this.elementCount );
        },

        get: function (index) {
            if( index >= this.elementCount ) {
                throw new jsava.lang.ArrayIndexOutOfBoundsException( index );
            }

            return this.elementData[index];
        },

        set: function (index, element) {
            if( index >= this.elementCount ) {
                throw new jsava.lang.ArrayIndexOutOfBoundsException( index );
            }

            var oldValue = this.elementData[index];
            this.elementData[index] = element;
            return oldValue;
        },

        add: function () {
            var args = Array.prototype.slice.call( arguments );
            if( args.length === 1 ) {
                var element = args[0];
                this.modCount++;
                this.ensureCapacityHelper( this.elementCount + 1 );
                this.elementData[this.elementCount++] = element;

                return true;
            } else {
                var index = args[0],
                    element = args[1];
                this.insertElementAt( element, index );
            }
        },

        remove: function () {
            var args = Array.prototype.slice.call( arguments );
            if( qx.Class.isSubClassOf( args[0].constructor, jsava.lang.Object ) ) {
                return this.removeElement( args[0] );
            } else {
                var index = args[0];

                this.modCount++;
                if( index >= this.elementCount ) {
                    throw new jsava.lang.ArrayIndexOutOfBoundsException( index );
                }

                var oldValue = this.elementData[index],
                    numMoved = this.elementCount - index - 1;
                if( numMoved > 0 ) {
                    jsava.lang.System.arraycopy( this.elementData, index + 1, this.elementData, index, numMoved );
                }

                this.elementData[--this.elementCount] = null;
                return oldValue;
            }
        },

        clear: function () {
            this.removeAllElements();
        },

        containsAll: function (collection) {
            return this.super( arguments, collection );
        },

        addAll: function () {
            var args = Array.prototype.slice.call( arguments ),
                collection, array, numNew;
            if( args.length === 1 ) {
                collection = args[0];

                this.modCount++;
                array = collection.toArray();
                numNew = array.length;

                this.ensureCapacityHelper( this.elementCount + numNew );
                jsava.lang.System.arraycopy( array, 0, this.elementData, this.elementCount, numNew );
                this.elementCount += numNew;

                return numNew !== 0;
            } else {
                var index = args[0];
                collection = args[1];

                this.modCount++;
                array = collection.toArray();
                numNew = array.length;

                this.ensureCapacityHelper( this.elementCount + numNew );

                var numMoved = this.elementCount - index;
                if( numMoved > 0 ) {
                    jsava.lang.System.arraycopy( this.elementData, index, this.elementData, index + numNew, numMoved );
                }

                jsava.lang.System.arraycopy( array, 0, this.elementData, index, numNew );
                this.elementCount += numNew;

                return numNew !== 0;
            }
        },

        removeAll: function (collection) {
            return this.super( arguments, collection );
        },

        retainAll: function (collection) {
            return this.super( arguments, collection );
        },

        equals: function (obj) {
            return this.super( arguments, obj );
        },

        hashCode: function () {
            return this.super( arguments );
        },

        toString: function () {
            return this.super( arguments );
        },

        subList: function (fromIndex, toIndex) {
            return jsava.util.Collections.synchronizedList( this.super( arguments, fromIndex, toIndex ), this );
        },

        removeRange: function (fromIndex, toIndex) {
            this.modCount++;
            var numMoved = this.elementCount - toIndex;
            jsava.lang.System.arraycopy( this.elementData, toIndex, this.elementData, fromIndex, numMoved );

            var newElementCount = this.elementCount - (toIndex - fromIndex);
            while( this.elementCount !== newElementCount ) {
                this.elementData[--this.elementCount] = null;
            }
        },

        /** @private */
        writeObject: function () {
            throw new jsava.lang.UnsupportedOperationException();
        }
    }
} );