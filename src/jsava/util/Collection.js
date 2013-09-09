/**
 * @interface
 * @class jsava.util.Collection
 */
defineInterface( 'jsava.util.Collection', {
    extend: jsava.lang.Iterable,

    members: {
        /**
         * @public
         * @returns {Integer}
         */
        size: function () {
        },

        /**
         * @public
         * @returns {Boolean}
         */
        isEmpty: function () {
        },

        /**
         * @public
         * @param {jsava.lang.Object} obj
         * @returns {Boolean}
         */
        contains: function (obj) {
        },

        /**
         * @public
         * @inheritDoc
         */
        iterator: function () {
        },

        /**
         * @public
         * @returns {jsava.lang.Object[]}
         */
        toArray: function () {
        },

        /**
         * @public
         * @param elem
         * @returns {Boolean}
         */
        add: function (elem) {
        },

        /**
         * @public
         * @param obj
         * @returns {Boolean}
         */
        remove: function (obj) {
        },

        /**
         * @public
         * @param {jsava.util.Collection} collection
         * @returns {Boolean}
         */
        containsAll: function (collection) {
        },

        /**
         * @public
         * @param {jsava.util.Collection} collection
         * @returns {Boolean}
         */
        addAll: function (collection) {
        },

        /**
         * @public
         * @param {jsava.util.Collection} collection
         * @returns {Boolean}
         */
        removeAll: function (collection) {
        },

        /**
         * @public
         * @param {jsava.util.Collection} collection
         * @returns {Boolean}
         */
        retainAll: function (collection) {
        },

        /** @public */
        clear: function () {
        },

        /**
         * @public
         * @param {jsava.lang.Object} other
         * @returns {Boolean}
         */
        equals: function (other) {
        },

        /**
         * @public
         * @returns {Integer}
         */
        hashCode: function () {
        }
    }
} );