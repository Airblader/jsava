qx.Class.define( 'jsava.lang.CloneNotSupportedException', {
    extend: jsava.lang.Exception,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        serialVersionUID: 1
    }
} );