qx.Class.define( 'jsava.lang.ConcurrentModificationException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        serialVersionUID: 1
    }
} );