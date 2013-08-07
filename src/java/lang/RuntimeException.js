qx.Class.define( 'java.lang.RuntimeException', {
    extend: java.lang.Exception,

    construct: function () {
        this.base( arguments );
    },

    statics: {
        serialVersionUID: 1
    }
} );