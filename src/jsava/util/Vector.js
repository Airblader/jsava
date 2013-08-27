qx.Class.define( 'jsava.util.Vector', {
    extend: jsava.util.AbstractList,
    implement: [jsava.util.List, jsava.util.RandomAccess, jsava.lang.Cloneable, jsava.io.Serializable],

    construct: function () {
        var args = Array.prototype.slice.call( arguments );
        if( args.length === 1 && qx.Class.implementsInterface( args[0], jsava.util.Collection ) ) {
            /** @type jsava.util.Collection */
            var collection = args[0];

            this.base( arguments );

            this.elementData = collection.toArray();
            this.elementCount = this.elementData.length;
        } else {
            var initialCapacity = args.length !== 0 ? args[0] : 10,
                capacityIncrement = args.length === 2 ? args[1] : 0;

            this.base( arguments );

            if( initialCapacity < 0 ) {
                throw new jsava.lang.IllegalArgumentException( 'Illegal Capacity: ' + initialCapacity );
            }

            this.elementData = jsava.JsavaUtils.arrayOfGivenSize( initialCapacity, null );
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
         * @return {Number}
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
         * @return {jsava.util.Enumeration}
         */
        elements: function () {
            var __thisVector = this;

            return new ( jsava.JsavaUtils.createAnonymousClass( {
                extend: jsava.lang.Object,
                implement: jsava.util.Enumeration,

                members: {
                    /** @protected */
                    count: 0,

                    hasMoreElements: function () {
                        return this.count < __thisVector.elementCount;
                    },

                    nextElement: function () {
                        if( count < this.elementCount ) {
                            return __thisVector.elementData[this.count++];
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
         * @return {jsava.lang.Object}
         */
        elementAt: function (index) {
            if( index >= this.elementCount ) {
                throw new jsava.lang.ArrayIndexOutOfBoundsException( index + ' >= ' + this.elementCount );
            }

            return this.elementData[index];
        },

        /**
         * @public
         * @return {jsava.lang.Object}
         */
        firstElement: function () {
            if( this.elementCount === 0 ) {
                throw new jsava.lang.NoSuchElementException();
            }

            return this.elementData[0];
        },

        /**
         * @public
         * @return {jsava.lang.Object}
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
        }
    }
} );