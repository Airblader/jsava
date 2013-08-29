qx.Interface.define( "jsava.util.Map", {
    statics: {
        Entry: qx.Interface.define( 'jsava.util.Map.Entry', {
            members: {
                getKey: function () {
                },

                getValue: function () {
                },

                setValue: function (value) {
                },

                equals: function (other) {
                },

                hashCode: function () {
                }
            }
        } )
    },

    members: {
        /**
         * @returns {Integer}
         */
        size: function () {
        },

        /**
         * @returns {Boolean}
         */
        isEmpty: function () {
        },

        /**
         * @param {jsava.lang.Object} key
         * @returns {Boolean}
         */
        containsKey: function (key) {
        },

        /**
         * @param {jsava.lang.Object} value
         * @returns {Boolean}
         */
        containsValue: function (value) {
        },

        get: function (key) {
        },

        put: function (key, value) {

        },

        remove: function (key) {
        },

        putAll: function (map) {
        },

        clear: function () {

        },

        /**
         * @returns {jsava.util.Set}
         */
        keySet: function () {
        },

        /**
         * @returns {jsava.util.Collection}
         */
        values: function () {
        },

        /**
         * @returns {jsava.util.Set}
         */
        entrySet: function () {
        },

        /**
         * @param other
         * @returns {Boolean}
         */
        equals: function (other) {
        },

        /**
         * @returns {Integer}
         */
        hashCode: function () {
        }
    }
} );