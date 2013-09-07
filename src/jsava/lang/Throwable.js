qx.Class.define( 'jsava.lang.Throwable', {
    extend: jsava.lang.Object,
    implement: [jsava.io.Serializable],

    construct: function () {
        this.super( arguments );

        var args = Array.prototype.slice.call( arguments );
        this.fillInStackTrace();
        this.cause = this;

        if( args.length === 1
            && qx.Class.isSubClassOf( args[0].constructor, jsava.lang.Throwable ) ) {
            this.detailMessage = (args[0] === null) ? null : args[0].toString();
            this.cause = args[0];
        } else if( args.length >= 1 && typeof args[0] === 'string' ) {
            this.detailMessage = args[0];

            if( args.length === 2
                && qx.Class.isSubClassOf( args[1].constructor, jsava.lang.Throwable ) ) {
                this.cause = args[1];
            }
        }
    },

    statics: {
        /** @private */
        serialVersionUID: -3042686055658047
    },

    members: {
        detailMessage: null,
        /** @type jsava.lang.Throwable */
        cause: null,
        stackTrace: null,

        getMessage: function () {
            return this.detailMessage;
        },

        getLocalizedMessage: function () {
            return this.getMessage();
        },

        getCause: function () {
            return this.cause;
        },

        initCause: function (cause) {
            if( this.cause !== this ) {
                throw new jsava.lang.IllegalStateException( 'Can\'t overwrite cause' );
            }
            if( cause === this ) {
                throw new jsava.lang.IllegalArgumentException( 'Self-causation is not permitted' );
            }

            this.cause = cause;
            return this;
        },

        toString: function () {
            var className = this.getClassName(),
                message = this.getLocalizedMessage();
            return message !== null ? (className + ': ' + message) : className;
        },

        printStackTrace: function () {
            // TODO other method signatures
            if( console && console.error ) {
                console.error( this.stackTrace );
            }
        },

        fillInStackTrace: function () {
            this.stackTrace = new Error().stack;
        },

        getStackTrace: function () {
            return this.stackTrace;
        },

        setStackTrace: function (stackTrace) {
            this.stackTrace = stackTrace;
        }
    }
} );