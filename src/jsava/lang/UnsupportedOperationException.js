qx.Class.define( 'jsava.lang.UnsupportedOperationException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: -1242599979055084
    }
} );