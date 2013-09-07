qx.Class.define( 'jsava.lang.String', {
    extend: jsava.lang.Object,
    implement: [jsava.io.Serializable, jsava.lang.Comparable, jsava.lang.CharSequence],

    /**
     * @public
     */
    construct: function () {
        this.super( arguments );

        var args = Array.prototype.slice.call( arguments );

        // TODO implement constructors
        throw new jsava.lang.UnsupportedOperationException();
    },

    statics: {
        /** @private */
        serialVersionUID: -6849794470754667,

        /**
         * @protected
         * @static
         * @param {jsava.lang.String[]|String[]} source
         * @param {Number} sourceOffset
         * @param {Number} sourceCount
         * @param {jsava.lang.String[]|String[]} target
         * @param {Number} targetOffset
         * @param {Number} targetCount
         * @param {Number} fromIndex
         * @returns {Number}
         */
        lastIndexOf: function (source, sourceOffset, sourceCount, target, targetOffset, targetCount, fromIndex) {
            // TODO implement
            throw new jsava.lang.UnsupportedOperationException();
        }
    },

    members: {
        /**
         * @private
         * @type {jsava.lang.String[]}
         */
        value: null,
        offset: 0,
        count: 0,
        hash: 0,

        /** @public */
        getChars: function () {
            var args = Array.prototype.slice.call( arguments );
            if( args.length === 2 ) {
                var dst = args[0],
                    dstBegin = args[1];

                jsava.lang.System.arraycopy( this.value, this.offset, dst, dstBegin, this.count );
            }

            // TODO has another signature
        },

        /**
         * @public
         * @returns {jsava.lang.String[]|String[]}
         */
        toCharArray: function () {
            // TODO implement
            throw new jsava.lang.UnsupportedOperationException();
        },

        /**
         * @public
         * @returns {Number}
         */
        length: function () {
            return this.count;
        }

        // TODO missing a lot right now :)
    }
} );