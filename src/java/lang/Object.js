qx.Class.define( 'java.lang.Object', {
    members: {
        getClass: function () {
            return this.name;
        },

        hashCode: function () {
            // TODO
            throw new java.lang.UnsupportedOperationException();
        },

        equals: function (other) {
            return this === other;
        },

        clone: function () {
            // TODO
            throw new java.lang.UnsupportedOperationException();
        },

        toString: function () {
            // TODO not exact implementation
            return this.getClass().name + '@' + this.hashCode();
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