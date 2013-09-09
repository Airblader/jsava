/** @class jsava.lang.NoSuchElementException */
defineClass( 'jsava.lang.NoSuchElementException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.super.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    }
} );