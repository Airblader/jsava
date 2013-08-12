qx.Class.define( 'jsava.JsavaUtils', {
    extend: qx.core.Object,

    type: 'static',

    statics: {
        /**
         * Creates an anonymous class and returns it.
         * @returns {*}
         */
        createAnonymousClass: function () {
            var args = Array.prototype.slice.call( arguments ),
                clazzName, config,
                defaultClazzName = 'Anonymous';

            switch( args.length ) {
                case 1:
                    clazzName = defaultClazzName;
                    config = args[0];
                    break;
                case 2:
                    clazzName = args[0];
                    config = args[1];
                    break;
            }

            var clazz = qx.Class.define( clazzName, config );

            if( clazzName === defaultClazzName ) {
                qx.Class.undefine( clazzName );
            }

            return clazz;
        }
    }
} );