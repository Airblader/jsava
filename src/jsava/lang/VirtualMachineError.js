qx.Class.define( 'jsava.lang.VirtualMachineError', {
    extend: jsava.lang.Error,

    type: 'abstract',

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    }
} );