qx.Class.define( 'jsava.lang.Error', {
    extend: jsava.lang.Throwable,

    construct: function () {
        this.super.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: 4980196508277280
    }
} );