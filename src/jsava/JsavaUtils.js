qx.Class.define( 'jsava.JsavaUtils', {
    extend: qx.core.Object,

    type: 'static',

    statics: {
        /**
         * Creates an anonymous class and returns it.
         * @param config
         * @returns {*}
         */
        createAnonymousClass: function (config) {
            var name = 'Anonymous',
                clazz = qx.Class.define( name, config );
            qx.Class.undefine( name );
            return clazz;
        }
    }
} );