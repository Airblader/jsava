qx.Class.define( 'jsava.lang.Object', {
    extend: qx.core.Object,

    members: {
        /**
         * @return {String}
         */
        getClass: function () {
            // TODO return Class object
            throw new jsava.lang.UnsupportedOperationException();
        },

        /** @return {String} */
        getClassName: function () {
            // TODO remove this method and replace with getClass().getName()
            return this.name;
        },

        /**
         * @return {Number}
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
         * @return {Boolean}
         */
        equals: function (other) {
            return this === other;
        },

        clone: function () {
            var result;
            try {
                result = this.base( arguments );
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
         * @return {String}
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
        }
    }
} );