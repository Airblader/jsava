qx.Class.define( 'jsava.util.Arrays', {
    extend: jsava.lang.Object,

    type: 'static',

    statics: {
        // TODO various signatures may be missing
        /**
         * @param {jsava.lang.Object[]} original
         * @param {Number} newLength
         */
        copyOf: function (original, newLength) {
            var copy = jsava.Utils.arrayOfGivenSize( newLength, null );
            jsava.lang.System.arraycopy( original, 0, copy, 0, Math.min( original.length, newLength ) );

            return copy;
        },

        hashCode: function (source) {
            if( source === null ) {
                return 0;
            }

            var hashCode = 1;
            for( var i = 0; i < source.length; i++ ) {
                hashCode = 31 * hashCode + ( source[i] === null ? 0 : source[i].hashCode() );
            }

            return hashCode;
        }

        // TODO a lot more methods
    }
} );