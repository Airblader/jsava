qx.Class.define( 'jsava.JsavaUtils', {
    extend: qx.core.Object,

    type: 'static',

    statics: {
        /**
         * Creates an anonymous class and returns it.
         * @return {*}
         */
        createAnonymousClass: function (config) {
            var clazzName = 'Anonymous';

            var clazz = qx.Class.define( clazzName, config );
            qx.Class.undefine( clazzName );

            return clazz;
        },

        /**
         * Creates and returns an array of given size.
         * @param size
         * @param defaultValue will default to null
         * @return {Array}
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