qx.Class.define( 'jsava.lang.ClassCastException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    }
} );