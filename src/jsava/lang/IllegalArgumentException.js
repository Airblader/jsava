qx.Class.define( 'jsava.lang.IllegalArgumentException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        serialVersionUID: 1
    }
} );