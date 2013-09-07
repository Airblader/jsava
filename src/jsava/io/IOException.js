qx.Class.define( 'jsava.io.IOException', {
    extend: jsava.lang.Exception,

    construct: function () {
        this.super.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: 7818375828146090
    }
} );