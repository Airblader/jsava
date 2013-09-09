/** @class jsava.lang.ConcurrentModificationException */
defineClass( 'jsava.lang.ConcurrentModificationException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.super.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    }
} );