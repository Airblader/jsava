qx.Class.define( 'jsava.lang.Character', {
    extend: jsava.lang.Object,
    // TODO add Comparable interface
    implement: [jsava.io.Serializable],

    statics: {
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
        }

        // TODO a lot of constants to add
    },

    members: {
        // TODO character methods
    }
} );