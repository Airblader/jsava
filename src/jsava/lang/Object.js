/** @class jsava.lang.Object */
defineClass( 'jsava.lang.Object', {
    extend: qx.core.Object,

    members: {
        /**
         * @returns {String}
         */
        getClass: function () {
            // TODO return Class object
            throw new jsava.lang.UnsupportedOperationException();
        },

        /** @returns {String} */
        getClassName: function () {
            // TODO remove this method and replace with getClass().getName()
            return this.name;
        },

        /**
         * @returns {Number}
         */
        hashCode: function () {
            var hashCode = 0;

            for( var property in this ) {
                if( !this.hasOwnProperty( property )
                    || typeof this[property] === 'undefined' || this[property] === null ) {
                    continue;
                }

                hashCode = 31 * hashCode + this[property].hashCode();
            }

            return hashCode;
        },

        /**
         * @param other
         * @returns {Boolean}
         */
        equals: function (other) {
            return this === other;
        },

        clone: function () {
            var result;
            try {
                result = this.super( arguments );
            } finally {
                for( var property in this ) {
                    if( !this.hasOwnProperty( property ) || result.hasOwnProperty( property ) ) {
                        continue;
                    }

                    result[property] = this[property];
                }
            }

            return result;
        },

        /**
         * @returns {String}
         */
        toString: function () {
            return this.getClassName() + '@' + this.hashCode().toString( 16 );
        },

        notify: function () {
            // TODO
            throw new jsava.lang.UnsupportedOperationException();
        },

        notifyAll: function () {
            // TODO
            throw new jsava.lang.UnsupportedOperationException();
        },

        wait: function () {
            // TODO
            throw new jsava.lang.UnsupportedOperationException();
        },

        finalize: function () {
            throw new jsava.lang.UnsupportedOperationException();
        },

        /**
         * Synonym for this.super(arguments) for more Java-like syntax.
         * @returns {*}
         */
        super: function () {
            return this.base.apply( this, arguments );
        }
    }
} );