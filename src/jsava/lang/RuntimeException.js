qx.Class.define( 'jsava.lang.RuntimeException', {
    extend: jsava.lang.Exception,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    }
} );