/** @class jsava.lang.RuntimeException */
defineClass( 'jsava.lang.RuntimeException', {
    extend: jsava.lang.Exception,

    construct: function () {
        this.super.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: -7034897190745766
    }
} );