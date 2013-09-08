defineInterface( 'jsava.util.List', {
    extend: jsava.util.Collection,

    members: {
        /**
         * @public
         * @returns {Number}
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
         * @returns {Boolean}
         */
        contains: function (obj) {
        },

        /**
         * @public
         * @returns {jsava.util.Iterator}
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
         * @returns {Boolean}
         */
        add: function () {
        },

        /**
         * @public
         * @param {jsava.lang.Object} obj
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
         * @returns {Number}
         */
        hashCode: function () {
        },

        /**
         * @public
         * @param {Number} index
         */
        get: function (index) {
        },

        /**
         * @public
         * @param {Number} index
         * @param element
         */
        set: function (index, element) {
        },

        /**
         * @public
         * @param {jsava.lang.Object} obj
         * @returns {Number}
         */
        indexOf: function (obj) {
        },

        /**
         * @public
         * @param {jsava.lang.Object} obj
         * @returns {Number}
         */
        lastIndexOf: function (obj) {
        },

        /**
         * @public
         * @returns {jsava.util.ListIterator}
         */
        listIterator: function () {
        },

        /**
         * @public
         * @param {Number} fromIndex
         * @param {Number} toIndex
         * @returns {jsava.util.List}
         */
        subList: function (fromIndex, toIndex) {
        }
    }
} );