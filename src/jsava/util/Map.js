/**
 * @interface
 * @class jsava.util.Map
 */
defineInterface( "jsava.util.Map", {
    statics: {
        /**
         * @interface
         * @class jsava.util.Map.Entry
         */
        Entry: defineInterface( 'jsava.util.Map.Entry', {
            members: {
                /** @public */
                getKey: function () {
                },

                /** @public */
                getValue: function () {
                },

                /** @public */
                setValue: function (value) {
                },

                /** @public */
                equals: function (other) {
                },

                /** @public */
                hashCode: function () {
                }
            }
        } )
    },

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
         * @param {jsava.lang.Object} key
         * @returns {Boolean}
         */
        containsKey: function (key) {
        },

        /**
         * @public
         * @param {jsava.lang.Object} value
         * @returns {Boolean}
         */
        containsValue: function (value) {
        },

        /** @public */
        get: function (key) {
        },

        /** @public */
        put: function (key, value) {
        },

        /** @public */
        remove: function (key) {
        },

        /** @public */
        putAll: function (map) {
        },

        /** @public */
        clear: function () {
        },

        /**
         * @public
         * @returns {jsava.util.Set}
         */
        keySet: function () {
        },

        /**
         * @public
         * @returns {jsava.util.Collection}
         */
        values: function () {
        },

        /**
         * @public
         * @returns {jsava.util.Set}
         */
        entrySet: function () {
        },

        /**
         * @public
         * @param other
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