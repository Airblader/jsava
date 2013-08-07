qx.Class.define( 'java.lang.UnsupportedOperationException', {
    // TODO fix inheritance to RuntimeException
    extend: java.lang.Object,

    construct: function () {
    // TODO fix when above is fixed
    //    this.base( arguments );

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