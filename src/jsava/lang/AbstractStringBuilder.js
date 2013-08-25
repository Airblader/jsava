qx.Class.define( 'jsava.lang.AbstractStringBuilder', {
    extend: jsava.lang.Object,
    implement: [jsava.lang.Appendable, jsava.lang.CharSequence],

    type: 'abstract',

    construct: function () {
        var args = Array.prototype.slice.call( arguments );
        if( args.length === 1 ) {
            var capacity = args[0];
            this.value = jsava.JsavaUtils.arrayOfGivenSize( capacity, '\u0000' );
        }
    },

    statics: {
        /**
         * @protected
         * @param {Number} x
         * @return {Number}
         */
        stringSizeOfLong: function (x) {
            // TODO this is the Java implementation, but it might need to be adapted for Javascript
            var p = 10;
            for( var i = 1; i < 19; i++ ) {
                if( x < p ) {
                    return i;
                }

                p = 10 * p;
            }

            return 19;
        }
    },

    members: {
        /**
         * @protected
         * @type String[]
         */
        value: null,

        /** @protected */
        count: 0,

        length: function () {
            return this.count;
        },

        /**
         * @public
         * @return {Number}
         */
        capacity: function () {
            return this.value.length;
        },

        /**
         * @public
         * @param {Number} minimumCapacity
         */
        ensureCapacity: function (minimumCapacity) {
            if( minimumCapacity > this.value.length ) {
                this.expandCapacity( minimumCapacity );
            }
        },

        /**
         * @protected
         * @param {Number} minimumCapacity
         */
        expandCapacity: function (minimumCapacity) {
            var newCapacity = (this.value.length + 1) * 2;
            if( newCapacity < 0 ) {
                // TODO use Integer.MAX_VALUE
                newCapacity = 0x7fffffff;
            } else if( minimumCapacity < newCapacity ) {
                newCapacity = minimumCapacity;
            }

            this.value = jsava.util.Arrays.copyOf( this.value, newCapacity );
        },

        /** @public */
        trimToSize: function () {
            if( this.count < this.value.length ) {
                this.value = jsava.util.Arrays.copyOf( this.value, this.count );
            }
        },

        /**
         * @public
         * @param {Number} newLength
         */
        setLength: function (newLength) {
            if( newLength < 0 ) {
                throw new jsava.lang.StringIndexOutOfBoundsException( newLength );
            }
            if( newLength > this.value.length ) {
                this.expandCapacity( newLength );
            }

            if( this.count < newLength ) {
                for( ; this.count < newLength; this.count++ ) {
                    this.value[this.count] = '\0';
                }
            } else {
                this.count = newLength;
            }
        },

        charAt: function (index) {
            if( index < 0 || index >= this.count ) {
                throw new jsava.lang.StringIndexOutOfBoundsException( index );
            }

            return this.value[index];
        },

        /**
         * @public
         * @param {Number} index
         * @return {Number}
         */
        codePointAt: function (index) {
            if( index < 0 || index >= this.count ) {
                throw new jsava.lang.StringIndexOutOfBoundsException( index );
            }

            // TODO use : return Character.codePointAt( this.value, index );
            throw new jsava.lang.UnsupportedOperationException();
        },

        /**
         * @public
         * @param {Number} index
         * @return {Number}
         */
        codePointBefore: function (index) {
            var i = index - 1;
            if( i < 0 || i >= this.count ) {
                throw new jsava.lang.StringIndexOutOfBoundsException( index );
            }

            // TODO use : return Character.codePointBefore( this.value, index );
            throw new jsava.lang.UnsupportedOperationException();
        },

        /**
         * @public
         * @param {Number} beginIndex
         * @param {Number} endIndex
         * @return {Number}
         */
        codePointCount: function (beginIndex, endIndex) {
            if( beginIndex < 0 || endIndex > this.count || beginIndex > endIndex ) {
                throw new jsava.lang.IndexOutOfBoundsException();
            }

            // TODO use : return Character.codePointCountImpl( this.value, beginIndex, endIndex - beginIndex );
            throw new jsava.lang.UnsupportedOperationException();
        },

        /**
         * @public
         * @param {Number} index
         * @param {Number} codePointOffset
         * @return {Number}
         */
        offsetByCodePoints: function (index, codePointOffset) {
            if( index < 0 || index > this.count ) {
                throw new jsava.lang.IndexOutOfBoundsException();
            }

            // TODO use : return Character.offsetByCodePointsImpl( this.value, 0, this.count, index, codePointOffset );
            throw new jsava.lang.UnsupportedOperationException();
        },

        /**
         * @public
         * @param {Number} srcBegin
         * @param {Number} srcEnd
         * @param {String[]} dst
         * @param {Number} dstBegin
         */
        getChars: function (srcBegin, srcEnd, dst, dstBegin) {
            if( srcBegin < 0 ) {
                throw new jsava.lang.StringIndexOutOfBoundsException( srcBegin );
            }
            if( srcEnd < 0 || srcEnd > count ) {
                throw new jsava.lang.StringIndexOutOfBoundsException( srcEnd );
            }
            if( srcBegin > srcEnd ) {
                throw new jsava.lang.StringIndexOutOfBoundsException( "srcBegin > srcEnd" );
            }

            jsava.lang.System.arraycopy( this.value, srcBegin, dst, dstBegin, srcEnd - srcBegin );
        },

        /**
         * @public
         * @param {Number} index
         * @param {String} ch
         */
        setCharAt: function (index, ch) {
            if( index < 0 || index >= this.count ) {
                throw new jsava.lang.StringIndexOutOfBoundsException( index );
            }

            this.value[index] = ch;
        },

        /**
         * @public
         * @return {jsava.lang.AbstractStringBuilder}
         */
        append: function () {
            // TODO implement (many signatures!)
        },

        /**
         * @public
         * @param {Number} start
         * @param {Number} end
         * @return {jsava.lang.AbstractStringBuilder}
         */
        // TODO 'delete' not allowed because it's a reserved keyword
        delete_: function (start, end) {
            if( start < 0 ) {
                throw new jsava.lang.StringIndexOutOfBoundsException( start );
            }
            if( end > this.count ) {
                end = this.count;
            }
            if( start > end ) {
                throw new jsava.lang.StringIndexOutOfBoundsException();
            }
            var len = end - start;
            if( len > 0 ) {
                jsava.lang.System.arraycopy( this.value, start + len, this.value, start, this.count - end );
                this.count -= len;
            }

            return this;
        },

        /**
         * @public
         * @param {Number} codePoint
         * @return {jsava.lang.AbstractStringBuilder}
         */
        appendCodePoint: function (codePoint) {
            // TODO implement
        },

        /**
         * @public
         * @param {Number} index
         * @return {jsava.lang.AbstractStringBuilder}
         */
        deleteCharAt: function (index) {
            if( index < 0 || index >= this.count ) {
                throw new jsava.lang.StringIndexOutOfBoundsException( index );
            }

            jsava.lang.System.arraycopy( this.value, index + 1, this.value, index, this.count - index - 1 );
            this.count--;

            return this;
        },

        /**
         * @public
         * @param {Number} start
         * @param {Number} end
         * @param {String|jsava.lang.String} str
         * @return {jsava.lang.AbstractStringBuilder}
         */
        replace: function (start, end, str) {
            // TODO convert str into jsava.lang.String if it's a Javascript string

            if( start < 0 ) {
                throw new jsava.lang.StringIndexOutOfBoundsException( start );
            }
            if( start > this.count ) {
                throw new jsava.lang.StringIndexOutOfBoundsException( "start > length()" );
            }
            if( start > end ) {
                throw new jsava.lang.StringIndexOutOfBoundsException( "start > end" );
            }

            if( end > this.count ) {
                end = this.count;
            }

            // TODO remove this exception
            throw new jsava.lang.UnsupportedOperationException();

            // TODO use : str.length()
            var len = str.length;
            var newCount = this.count + len - (end - start);
            if( newCount > this.value.length ) {
                this.expandCapacity( newCount );
            }

            jsava.lang.System.arraycopy( this.value, end, this.value, start + len, this.count - end );
            // TODO use : str.getChars( this.value, start );
            this.count = newCount;

            return this;
        },

        /**
         * @public
         * @return {String}
         */
        substring: function () {
            var args = Array.prototype.slice.call( arguments );
            if( args.length === 1 ) {
                return this.substring( start, this.count );
            }

            // TODO implement second signature
        },

        /**
         * @public
         * @param {Number} start
         * @param {Number} end
         * @return {jsava.lang.CharSequence}
         */
        subSequence: function (start, end) {
            // TODO implement
        },

        /**
         * @public
         * @return {jsava.lang.AbstractStringBuilder}
         */
        insert: function () {
            // TODO implement (several signatures)
        },

        /**
         * @public
         * @return {Number}
         */
        indexOf: function () {
            // TODO implement (several signatures)
        },

        /**
         * @public
         * @return {Number}
         */
        lastIndexOf: function () {
            // TODO implement (several signatures)
        },

        /**
         * @public
         * @return {jsava.lang.AbstractStringBuilder}
         */
        reverse: function () {
            // TODO implement
        },

        toString: function () {
        },

        /**
         * @protected
         * @return {String[]}
         */
        getValue: function () {
        }
    }
} );