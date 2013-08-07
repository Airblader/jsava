qx.Class.define( 'java.lang.Exception', {
    extend: java.lang.Throwable,

    construct: function () {
        this.base( arguments );
    },

    statics: {
        serialVersionUID: 1
    }
} );