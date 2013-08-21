qx.Class.define( 'jsava.util.Arrays', {
    extend: jsava.lang.Object,

    type: 'static',

    statics: {
        // TODO various signatures may be missing
        /**
         * @param {jsava.lang.Object[]} source
         * @param {Number} newSize
         */
        copyOf: function (source, newSize) {
            var newArray = Array.prototype.slice.call( source, 0, newSize );
            for( var i = newArray.length; i < newSize; i++ ) {
                newArray[i] = null;
            }

            return newArray;
        }

        // TODO a lot more methods
    }
} );