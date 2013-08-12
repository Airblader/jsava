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
        }
    }
} );