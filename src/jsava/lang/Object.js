qx.Class.define( 'jsava.lang.Object', {
    extend: qx.core.Object,

    statics: {
        __hashCodeCache: -9007199254740992
    },

    members: {
        __hashCode: undefined,

        getClass: function () {
            return this.name;
        },

        hashCode: function () {
            if( typeof this.__hashCode === 'undefined' ) {
                // TODO better way to access the static property
                this.__hashCode = jsava.lang.Object.__hashCodeCache++;
            }

            return this.__hashCode;
        },

        equals: function (other) {
            return this === other;
        },

        clone: function () {
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

        finalize: function () {
            throw new jsava.lang.UnsupportedOperationException();
        }
    }
} );