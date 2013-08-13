qx.Class.define( 'jsava.JsavaUtils', {
    extend: qx.core.Object,

    type: 'static',

    statics: {
        /**
         * Creates an anonymous class and returns it.
         * @returns {*}
         */
        createAnonymousClass: function (config) {
            var clazzName = 'Anonymous';

            var clazz = qx.Class.define( clazzName, config );
            qx.Class.undefine( clazzName );

            return clazz;
        },

        /**
         * Creates and returns an empty array of given size.
         * @param size
         * @returns {Array}
         */
        emptyArrayOfGivenSize: function (size) {
            var result = [];
            result[size - 1] = undefined;

            return result;
        }
    }
} );