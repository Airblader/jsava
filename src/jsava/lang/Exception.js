qx.Class.define( 'jsava.lang.Exception', {
    extend: jsava.lang.Throwable,

    construct: function () {
        this.super.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: -3387516993124229
    }
} );