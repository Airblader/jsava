qx.Class.define( 'jsava.lang.InternalError', {
    extend: jsava.lang.VirtualMachineError,

    construct: function () {
        this.super.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    }
} );