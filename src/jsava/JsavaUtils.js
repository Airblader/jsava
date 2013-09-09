/** @class jsava.Utils */
defineClass( 'jsava.Utils', {
    extend: qx.core.Object,

    type: 'static',

    statics: {
        /**
         * Creates an anonymous class and returns it.
         * @returns {*}
         */
        createAnonymousClass: function (config) {
            // TODO inline
            return defineClass( null, config );
        },

        /**
         * Creates and returns an array of given size.
         * @param size
         * @param defaultValue will default to null
         * @returns {Array}
         */
        arrayOfGivenSize: function (size, defaultValue) {
            if( typeof defaultValue === 'undefined' ) {
                defaultValue = null;
            }

            var result = [];
            for( var i = 0; i < size; i++ ) {
                result[i] = defaultValue;
            }

            return result;
        }
    }
} );