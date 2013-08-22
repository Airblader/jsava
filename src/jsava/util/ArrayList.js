qx.Class.define( 'jsava.util.ArrayList', {
    extend: jsava.util.AbstractList,
    implement: [jsava.util.List, jsava.util.RandomAccess, jsava.lang.Cloneable, jsava.io.Serializable],

    construct: function () {
        var args = Array.prototype.slice.call( arguments );
        if( args.length === 0 ) {
            args = [10];
        }

        if( qx.Class.implementsInterface( args[0], jsava.util.Collection ) ) {
            /** @type jsava.util.Collection */
            var collection = args[0];

            this.elementData = collection.toArray();
            this.__size = this.elementData.length;
        } else {
            var initialCapacity = args[0];

            this.base( arguments );
            if( initialCapacity < 10 ) {
                throw new jsava.lang.IllegalArgumentException( 'Illegal Capacity: ' + initialCapacity );
            }

            this.elementData = jsava.JsavaUtils.arrayOfGivenSize( initialCapacity, null );
        }
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    },

    members: {
        /**
         * @private
         * @type {jsava.lang.Object[]}
         */
        elementData: null,

        /** @private */
        __size: 0,

        trimtoSize: function () {
            this.modCount++;
            var oldCapacity = this.elementData.length;
            if( this.__size < oldCapacity ) {
                this.elementData = jsava.util.Arrays.copyOf( this.elementData, this.__size );
            }
        },

        /**
         * @param {Number} minCapacity
         */
        ensureCapacity: function (minCapacity) {
            this.modCount++;
            var oldCapacity = this.elementData.length;
            if( minCapacity > oldCapacity ) {
                var oldData = this.elementData,
                    newCapacity = (oldCapacity * 3) / 2 + 1;
                if( newCapacity < minCapacity ) {
                    newCapacity = minCapacity;
                }

                this.elementData = jsava.util.Arrays.copyOf( this.elementData, newCapacity );
            }
        },

        size: function () {
            return this.__size;
        },

        isEmpty: function () {
            return this.__size === 0;
        },

        contains: function (obj) {
            return this.indexOf( obj ) >= 0;
        },

        indexOf: function (obj) {
            if( obj === null ) {
                for( var i = 0; i < this.__size; i++ ) {
                    if( this.elementData[i] === null ) {
                        return i;
                    }
                }
            } else {
                for( var i = 0; i < this.__size; i++ ) {
                    if( obj.equals( this.elementData[i] ) ) {
                        return i;
                    }
                }
            }

            return -1;
        },

        lastIndexOf: function (obj) {
            if( obj === null ) {
                for( var i = this.__size - 1; i >= 0; i-- ) {
                    if( this.elementData[i] === null ) {
                        return i;
                    }
                }
            } else {
                for( var i = this.__size - 1; i >= 0; i-- ) {
                    if( obj.equals( this.elementData[i] ) ) {
                        return i;
                    }
                }
            }

            return -1;
        },

        clone: function () {
            try {
                /** @type jsava.util.ArrayList */
                var v = this.base( arguments );
                v.elementData = jsava.util.Arrays.copyOf( this.elementData, this.__size );
                v.modCount = 0;
                return v;
            } catch( e ) {
                if( qx.Class.isSubClassOf( e.constructor, jsava.lang.CloneNotSupportedException ) ) {
                    // TODO throw InternalError.InternalError
                    throw new jsava.lang.Exception();
                }

                throw e;
            }
        },

        toArray: function () {
            return jsava.util.Arrays.copyOf( this.elementData, this.__size );
        },

        get: function (index) {
            this.RangeCheck( index );
            return this.elementData[index];
        },

        set: function (index, element) {
            this.RangeCheck( index );

            var oldValue = this.elementData[index];
            this.elementData[index] = element;
            return oldValue;
        },

        add: function () {
            var args = Array.prototype.slice.call( arguments );
            switch( args.length ) {
                case 1:
                    var element = args[0];

                    this.ensureCapacity( this.__size + 1 );
                    this.elementData[this.__size++] = element;
                    return true;
                case 2:
                    var index = args[0],
                        element = args[1];

                    if( index > this.__size || index < 0 ) {
                        throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ', Size: ' + this.__size );
                    }

                    this.ensureCapacity( this.__size + 1 );
                    jsava.lang.System.arraycopy( this.elementData, index, this.elementData, index + 1,
                        this.__size - index );
                    this.elementData[index] = element;
                    this.__size++;
                    break;
            }
        },

        remove: function () {
            var args = Array.prototype.slice.call( arguments );
            if( args[0] === null || qx.Class.isSubClassOf( args[0].constructor, jsava.lang.Object ) ) {
                var obj = args[0];

                if( obj === null ) {
                    for( var index = 0; index < this.__size; index++ ) {
                        if( this.elementData[index] === null ) {
                            this.fastRemove( index );
                            return true;
                        }
                    }
                } else {
                    for( var index = 0; index < this.__size; index++ ) {
                        if( obj.equals( this.elementData[index] ) ) {
                            this.fastRemove( index );
                            return true;
                        }
                    }
                }

                return false;
            } else {
                var index = args[0];

                this.RangeCheck( index );
                this.modCount++;
                var oldValue = this.elementData[index];

                var numMoved = this.__size - index - 1;
                if( numMoved > 0 ) {
                    jsava.lang.System.arraycopy( this.elementData, index + 1, this.elementData, index, numMoved );
                }
                this.elementData[--this.__size] = null;

                return oldValue;
            }
        },

        /** @private */
        fastRemove: function (index) {
            this.modCount++;
            var numMoved = this.__size - index - 1;
            if( numMoved > 0 ) {
                jsava.lang.System.arraycopy( this.elementData, index + 1, this.elementData, index, numMoved );
            }
            this.elementData[--this.__size] = null;
        },

        clear: function () {
            this.modCount++;

            for( var i = 0; i < this.__size; i++ ) {
                this.elementData[i] = null;
            }

            this.__size = 0;
        },

        addAll: function () {
            var args = Array.prototype.slice.call( arguments );
            switch( args.length ) {
                case 1:
                    /** @type jsava.util.Collection */
                    var collection = args[0];

                    var a = collection.toArray(),
                        numNew = a.length;
                    this.ensureCapacity( this.__size + numNew );
                    jsava.lang.System.arraycopy( a, 0, this.elementData, this.__size, numNew );
                    this.__size += numNew;

                    return numNew !== 0;
                case 2:
                    var index = args[0],
                        /** @type jsava.util.Collection */
                            collection = args[1];

                    if( index > this.__size || index < 0 ) {
                        throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ', Size: ' + this.__size );
                    }

                    var a = collection.toArray(),
                        numNew = a.length;
                    this.ensureCapacity( this.__size + numNew );

                    var numMoved = this.__size - index;
                    if( numMoved > 0 ) {
                        jsava.lang.System.arraycopy( this.elementData, index, this.elementData, index + numNew,
                            numMoved );
                    }
                    jsava.lang.System.arraycopy( a, 0, this.elementData, index, numNew );
                    this.__size += numNew;

                    return numNew !== 0;
            }
        },

        removeRange: function (fromIndex, toIndex) {
            this.modCount++;
            var numMoved = this.__size - toIndex;
            jsava.lang.System.arraycopy( this.elementData, toIndex, this.elementData, fromIndex, numMoved );

            var newSize = this.__size - (toIndex - fromIndex);
            while( this.__size !== newSize ) {
                this.elementData[--this.__size] = null;
            }
        },

        /** @private */
        RangeCheck: function (index) {
            if( index >= this.__size ) {
                throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ', Size: ' + this.__size );
            }
        },

        /** @private */
        writeObject: function () {
            throw new jsava.lang.UnsupportedOperationException();
        },

        /** @private */
        readObject: function () {
            throw new jsava.lang.UnsupportedOperationException();
        }
    }
} );