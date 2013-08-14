qx.Class.define( 'jsava.lang.CloneNotSupportedException', {
    extend: jsava.lang.Exception,

    construct: function () {
        this.base( arguments );
    },

    statics: {
        serialVersionUID: 1
    }
} );