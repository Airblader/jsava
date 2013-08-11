qx.Class.define( 'jsava.lang.Object', {
    extend: qx.core.Object,

    members: {
        getClass: function () {
            return this.name;
        },

        hashCode: function () {
            var hashCode = 0;

            // TODO if hashCode() is available on property, use it
            for( var property in this ) {
                if( !this.hasOwnProperty( property )
                    || typeof this[property] === 'undefined' || !this[property].toString ) {
                    continue;
                }

                var temp = this[property].toString();
                for( var i = 0; i < temp.length; i++ ) {
                    hashCode = (31 * hashCode + temp.charCodeAt( i )) << 0;
                }
            }

            return hashCode;
        },

        equals: function (other) {
            return this === other;
        },

        _clone: function () {
            // TODO
            throw new jsava.lang.UnsupportedOperationException();
        },

        toString: function () {
            return this.getClass().name + '@' + this.hashCode().toString( 16 );
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

        _finalize: function () {
            throw new jsava.lang.UnsupportedOperationException();
        }
    }
} );