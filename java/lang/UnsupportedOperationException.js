qx.Class.define( 'java.lang.UnsupportedOperationException', {
    extend: qx.core.Object,

    construct: function () {
        this.base( arguments );

        this.message = arguments[0] || null;
        this.cause = arguments[1] || null;
    },

    members: {
        message: null,
        cause: null,

        toString: function () {
            return 'UnsupportedOperationException: ' + this.message + ' <' + this.cause + '>';
        }
    }
} );