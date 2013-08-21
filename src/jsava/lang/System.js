qx.Class.define( 'jsava.lang.System', {
    // TODO much more stuff implement

    extend: jsava.lang.Object,

    type: 'static',

    statics: {
        /**
         * @param {jsava.lang.Object} src
         * @param {Number} srcPos
         * @param {jsava.lang.Object} dest
         * @param {Number} destPos
         * @param {Number} length
         */
        arraycopy: function (src, srcPos, dest, destPos, length) {
            var temp = Array.prototype.slice.call( src );

            for( var i = 0; i < length; i++ ) {
                dest[destPos + i] = temp[srcPos + i];
            }
        }
    }
} );