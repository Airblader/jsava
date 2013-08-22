qx.Class.define( 'jsava.lang.Throwable', {
    extend: jsava.lang.Object,
    implement: [jsava.io.Serializable],

    construct: function () {
        var args = Array.prototype.slice.call( arguments );
        this.fillInStackTrace();
        this.__cause = this;

        if( args.length === 1
            && qx.Class.isSubClassOf( args[0].constructor, jsava.lang.Throwable ) ) {
            this.__detailMessage = (args[0] === null) ? null : args[0].toString();
            this.__cause = args[0];
        } else if( args.length >= 1 && typeof args[0] === 'string' ) {
            this.__detailMessage = args[0];

            if( args.length === 2
                && qx.Class.isSubClassOf( args[1].constructor, jsava.lang.Throwable ) ) {
                this.__cause = args[1];
            }
        }
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    },

    members: {
        __detailMessage: null,
        /** @type jsava.lang.Throwable */
        __cause: null,
        __stackTrace: null,

        getMessage: function () {
            return this.__detailMessage;
        },

        getLocalizedMessage: function () {
            return this.getMessage();
        },

        getCause: function () {
            return this.__cause;
        },

        initCause: function (cause) {
            if( this.__cause !== this ) {
                throw new jsava.lang.IllegalStateException( 'Can\'t overwrite cause' );
            }
            if( cause === this ) {
                throw new jsava.lang.IllegalArgumentException( 'Self-causation is not permitted' );
            }

            this.__cause = cause;
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
                console.error( this.__stackTrace );
            }
        },

        fillInStackTrace: function () {
            this.__stackTrace = new Error().stack;
        },

        getStackTrace: function () {
            return this.__stackTrace;
        },

        setStackTrace: function (stackTrace) {
            this.__stackTrace = stackTrace;
        }
    }
} );