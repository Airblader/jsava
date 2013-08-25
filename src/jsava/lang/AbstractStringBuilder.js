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
            // TODO implement
        },

        /** @public */
        trimToSize: function () {
            // TODO implement
        },

        /**
         * @public
         * @param {Number} newLength
         */
        setLength: function (newLength) {
            // TODO implement
        },

        charAt: function (index) {
            // TODO implement
        },

        /**
         * @public
         * @param {Number} index
         * @return {Number}
         */
        codePointAt: function (index) {
            // TODO implement
        },

        /**
         * @public
         * @param {Number} index
         * @return {Number}
         */
        codePointBefore: function (index) {
            // TODO implement
        },

        /**
         * @public
         * @param {Number} beginIndex
         * @param {Number} endIndex
         * @return {Number}
         */
        codePointCount: function (beginIndex, endIndex) {
            // TODO implement
        },

        /**
         * @public
         * @param {Number} index
         * @param {Number} codePointOffset
         * @return {Number}
         */
        offetByCodePoints: function (index, codePointOffset) {
            // TODO implement
        },

        /**
         * @public
         * @param {Number} srcBegin
         * @param {Number} srcEnd
         * @param {String[]} dst
         * @param {Number} dstBegin
         */
        getChars: function (srcBegin, srcEnd, dst, dstBegin) {
            // TODO implement
        },

        /**
         * @public
         * @param {Number} index
         * @param {String} ch
         */
        setCharAt: function (index, ch) {
            // TODO implement
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
            // TODO implement
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
            // TODO implement
        },

        /**
         * @public
         * @param {Number} start
         * @param {Number} end
         * @param {String} str
         * @return {jsava.lang.AbstractStringBuilder}
         */
        replace: function (start, end, str) {
            // TODO implement
        },

        /**
         * @public
         * @return {String}
         */
        substring: function () {
            // TODO implement (several signatures)
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