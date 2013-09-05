qx.Class.define( 'jsava.lang.Object', {
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
         * Returns a static member (i.e. an static inner class) with given name and respect to the fact
         * that subclasses can hide static members.
         * All static fields that don't explicitly reference a class should use this method instead of
         * this.self(arguments), this.constructor or similar techniques in order to allow subclasses to hide
         * the value of the member.
         *
         * For an example refer to jsava.util.HashMap#createEntry
         *
         * @param {string} staticMember Name of the static member to look for
         * @returns {jsava.lang.Object}
         */
        statics: function (staticMember) {
            var parent = this.constructor;
            while( typeof parent.superclass !== 'undefined' ) {
                if( typeof parent[staticMember] !== 'undefined' ) {
                    return parent[staticMember];
                }

                parent = parent.superclass.constructor;
            }

            throw new jsava.lang.IllegalStateException( 'could not find static member' );
        }
    }
} );