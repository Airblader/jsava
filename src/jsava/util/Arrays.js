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
            var copy = jsava.JsavaUtils.arrayOfGivenSize( newLength, null );
            jsava.lang.System.arraycopy( original, 0, copy, 0, Math.min( original.length, newLength ) );

            return copy;
        }

        // TODO a lot more methods
    }
} );