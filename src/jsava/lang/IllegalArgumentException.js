qx.Class.define( 'jsava.lang.IllegalArgumentException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base( arguments );
    },

    statics: {
        serialVersionUID: 1
    }
} );