qx.Interface.define( 'jsava.util.Collection', {
    extend: jsava.lang.Iterable,

    members: {
        /**
         * @return {Integer}
         */
        size: function () {
        },

        /**
         * @return {Boolean}
         */
        isEmpty: function () {
        },

        /**
         * @param {jsava.lang.Object} obj
         * @return {Boolean}
         */
        contains: function (obj) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        /**
         * @inheritDoc
         */
        iterator: function () {
        },

        /**
         * @return {jsava.lang.Object[]}
         */
        toArray: function () {
        },

        /**
         * @param elem
         * @return {Boolean}
         */
        add: function (elem) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        /**
         * @param obj
         * @return {Boolean}
         */
        remove: function (obj) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        containsAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        addAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        removeAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        retainAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        clear: function () {
        },

        /**
         * @param {jsava.lang.Object} other
         * @return {Boolean}
         */
        equals: function (other) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        /**
         * @return {Integer}
         */
        hashCode: function () {
        }
    }
} );