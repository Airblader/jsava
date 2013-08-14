qx.Class.define( 'jsava.lang.ConcurrentModificationException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base( arguments );
    },

    statics: {
        serialVersionUID: 1
    }
} );