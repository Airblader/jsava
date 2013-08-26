qx.Class.define( 'jsava.lang.String', {
    extend: jsava.lang.Object,
    // TODO add Comparable interface
    implement: [jsava.io.Serializable, jsava.lang.CharSequence],

    construct: function () {
        // TODO implement constructors
        throw new jsava.lang.UnsupportedOperationException();
    },

    statics: {
        /** @private */
        serialVersionUID: 1,
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
         * @return {Number}
         */
        length: function () {
            return this.count;
        }

        // TODO missing a lot right now :)
    }
} );