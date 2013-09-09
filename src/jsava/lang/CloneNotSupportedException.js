/** @class jsava.lang.CloneNotSupportedException */
defineClass( 'jsava.lang.CloneNotSupportedException', {
    extend: jsava.lang.Exception,

    construct: function () {
        this.super.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    }
} );