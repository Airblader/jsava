qx.Class.define( 'jsava.lang.RuntimeException', {
    extend: jsava.lang.Exception,

    construct: function () {
        this.base( arguments );
    },

    statics: {
        serialVersionUID: 1
    }
} );