/**
 * NOTE
 * Work on this class is currently abandoned due to the enormous complexity.
 */
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
            // Note that Java uses '19' here, but in Javascript we cannot go that high
            var p = 10;
            for( var i = 1; i < 15; i++ ) {
                if( x < p ) {
                    return i;
                }

                p = 10 * p;
            }

            return 15;
        }
    },

    members: {
        /**
         * @protected
         * @type {jsava.lang.String[]}
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
                newCapacity = jsava.lang.Integer.MAX_VALUE;
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

            return jsava.lang.Character.codePointAt( this.value, index );
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

            return jsava.lang.Character.codePointBefore( this.value, index );
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

            return jsava.lang.Character.codePointCountImpl( this.value, beginIndex, endIndex - beginIndex );
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

            return jsava.lang.Character.offsetByCodePointsImpl( this.value, 0, this.count, index, codePointOffset );
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
            if( !jsava.lang.Character.isValidCodePoint( codePoint ) ) {
                throw new jsava.lang.IllegalArgumentException();
            }
            var n = 1;
            if( codePoint >= jsava.lang.Character.MIN_SUPPLEMENTARY_CODE_POINT ) {
                n++;
            }
            var newCount = this.count + n;
            if( newCount > this.value.length ) {
                this.expandCapacity( newCount );
            }
            if( n === 1 ) {
                this.value[this.count++] = codePoint;
            } else {
                jsava.lang.Character.toSurrogates( codePoint, this.value, this.count );
                this.count += n;
            }

            return this;
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
         * @param {jsava.lang.String|String} str
         * @return {jsava.lang.AbstractStringBuilder}
         */
        replace: function (start, end, str) {
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

            var len = str.length(),
                newCount = this.count + len - (end - start);
            if( newCount > this.value.length ) {
                this.expandCapacity( newCount );
            }

            jsava.lang.System.arraycopy( this.value, end, this.value, start + len, this.count - end );
            str.getChars( this.value, start );
            this.count = newCount;

            return this;
        },

        /**
         * @public
         * @return {String|jsava.lang.String}
         */
        substring: function () {
            var args = Array.prototype.slice.call( arguments );
            if( args.length === 1 ) {
                var start = args[0];
                return this.substring( start, this.count );
            }

            var start = args[0],
                end = args[1];

            if( start < 0 ) {
                throw new jsava.lang.StringIndexOutOfBoundsException( start );
            }
            if( end > this.count ) {
                throw new jsava.lang.StringIndexOutOfBoundsException( end );
            }
            if( start > end ) {
                throw new jsava.lang.StringIndexOutOfBoundsException( end - start );
            }

            return new jsava.lang.String( this.value, start, end - start );
        },

        /**
         * @public
         * @param {Number} start
         * @param {Number} end
         * @return {jsava.lang.CharSequence}
         */
        subSequence: function (start, end) {
            return this.substring( start, end );
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
            var args = Array.prototype.slice.call( arguments );
            if( args.length === 1 ) {
                return this.lastIndexOf( args[0], this.count );
            }

            var str = args[0],
                fromIndex = args[1];

            return jsava.lang.String.lastIndexOf( this.value, 0, this.count,
                str.toCharArray(), 0, str.length(), fromIndex );
        },

        /**
         * @public
         * @return {jsava.lang.AbstractStringBuilder}
         */
        reverse: function () {
            // TODO implement
        },

        /** @abstract */
        toString: function () {
            /* abstract method */
        },

        /**
         * @protected
         * @return {String[]}
         */
        getValue: function () {
            return this.value;
        }
    }
} );