qx.Class.define( 'java.lang.Object', {
    members: {
        getClass: function () {
            return this.name;
        },

        hashCode: function () {
            // TODO this is a valid hashCode, but pretty dull
            return 0;
        },

        equals: function (other) {
            return this === other;
        },

        clone: function () {
            // TODO
            throw new java.lang.UnsupportedOperationException();
        },

        toString: function () {
            return this.getClass().name + '@' + this.hashCode().toString( 16 );
        },

        notify: function () {
            // TODO
            throw new java.lang.UnsupportedOperationException();
        },

        notifyAll: function () {
            // TODO
            throw new java.lang.UnsupportedOperationException();
        },

        wait: function () {
            // TODO
            throw new java.lang.UnsupportedOperationException();
        },

        finalize: function () {
            throw new java.lang.UnsupportedOperationException();
        }
    }
} );