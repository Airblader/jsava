qx.Class.define( 'jsava.lang.IllegalStateException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base( arguments );
    },

    statics: {
        serialVersionUID: 1
    }
} );