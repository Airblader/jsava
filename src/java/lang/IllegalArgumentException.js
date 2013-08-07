qx.Class.define( 'java.lang.IllegalArgumentException', {
    extend: java.lang.RuntimeException,

    construct: function () {
        this.base( arguments );
    },

    statics: {
        serialVersionUID: 1
    }
} );