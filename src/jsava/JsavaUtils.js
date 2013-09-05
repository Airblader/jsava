qx.Class.define( 'jsava.Utils', {
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
        },

        /**
         * Returns the static class with given name in respect to hidden classes, i.e.
         * if clazz has a static class with the given name itself, it will be used. Otherwise,
         * this method will go up the inheritance chain until it finds a static class of that name
         * and then return it.
         *
         * For an example refer to jsava.util.HashMap#createEntry
         *
         * @param clazz The encapsulating class (typically 'this')
         * @param {string} staticClazz Name of the static class to look for
         * @returns {*}
         */
        getStaticClass: function (clazz, staticClazz) {
            var parent = clazz.constructor;
            while( typeof parent.superclass !== 'undefined' ) {
                if( typeof parent[staticClazz] !== 'undefined' ) {
                    return parent[staticClazz];
                }

                parent = parent.superclass.constructor;
            }

            throw new jsava.lang.IllegalStateException( 'could not find static class in hierarchy' );
        }
    }
} );