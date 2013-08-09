qx.Class.define( 'jsava.lang.Exception', {
    extend: jsava.lang.Throwable,

    construct: function () {
        this.base( arguments );
    },

    statics: {
        serialVersionUID: 1
    }
} );