qx.Class.define( 'jsava.lang.Character', {
    extend: jsava.lang.Object,
    implement: [jsava.io.Serializable, jsava.lang.Comparable],

    statics: {
        MIN_SUPPLEMENTARY_CODE_POINT: 0x010000,

        /**
         * @public
         * @static
         * @param {jsava.lang.String[]|String[]} seq
         * @param {Number} index
         * @return {Number}
         */
        codePointBefore: function (seq, index) {
            // TODO implement
            throw new jsava.lang.UnsupportedOperationException();
        },

        /**
         * @public
         * @static
         * @param {jsava.lang.String[]|String[]} a
         * @param {Number} index
         * @return {Number}
         */
        codePointAt: function (a, index) {
            // TODO implement
            throw new jsava.lang.UnsupportedOperationException();
        },

        /**
         * @protected
         * @static
         * @param {String[]|jsava.lang.String[]} a
         * @param {Number} offset
         * @param {Number} count
         * @return {Number}
         */
        codePointCountImpl: function (a, offset, count) {
            // TODO implement
            throw new jsava.lang.UnsupportedOperationException();
        },

        /**
         * @protected
         * @static
         * @param {String[]|jsava.lang.String[]} a
         * @param {Number} start
         * @param {Number} count
         * @param {Number} index
         * @param {Number} codePointOffset
         * @return {Number}
         */
        offsetByCodePointsImpl: function (a, start, count, index, codePointOffset) {
            // TODO implement
            throw new jsava.lang.UnsupportedOperationException();
        },

        /**
         * @public
         * @static
         * @param {Number} codePoint
         * @return {Boolean}
         */
        isValidCodePoint: function (codePoint) {
            // TODO implement
            throw new jsava.lang.UnsupportedOperationException();
        },

        /**
         * @protected
         * @static
         * @param {Number} codePoint
         * @param {jsava.lang.String[]|String[]} dst
         * @param {Number} index
         */
        toSurrogates: function (codePoint, dst, index) {
            // TODO implement
            throw new jsava.lang.UnsupportedOperationException();
        }

        // TODO a lot of constants to add
    },

    members: {
        // TODO character methods
    }
} );