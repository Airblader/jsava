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
            // TODO use qx's internal toHashCode() ?
            if( typeof this.__hashCode === 'undefined' ) {
                // TODO this is incorrect as objects that are equal will not report the same hashCode
                //this.__hashCode = jsava.lang.Object.__hashCodeCache++;
                return 0;
            }

            return this.__hashCode;
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