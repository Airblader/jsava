qx.Class.define( 'jsava.lang.ArrayIndexOutOfBoundsException', {
    extend: jsava.lang.IndexOutOfBoundsException,

    construct: function () {
        var args = Array.prototype.slice.call( arguments );

        if( args.length === 1 && typeof args[0] === 'number' ) {
            this.super( arguments, 'Array index out of range: ' + args[0] );
        } else {
            this.super.apply( this, Array.prototype.concat.call( arguments, args ) );
        }
    }
} );