(function (window, undefined) {
    'use strict';

    var inheritStatics = function (clazz) {
        if( clazz.superclass === qx.core.Object ) {
            return;
        }

        for( var staticMember in clazz.superclass ) {
            if( !clazz.hasOwnProperty( staticMember )
                && String.prototype.substring.call( staticMember, 0, 2 ) !== '$$' ) {

                (function (superClass, staticMember) {
                    Object.defineProperty( clazz, staticMember, {
                        configurable: true,
                        enumerable: true,

                        get: function () {
                            return superClass[staticMember];
                        },

                        set: function (value) {
                            superClass[staticMember] = value;
                        }
                    } );
                })( clazz.superclass, staticMember );

                jsavaConsole.info( clazz.classname + ': inherited ' + clazz.superclass.classname + '.' + staticMember );
            }
        }

        clazz.$$inheritedStatics = true;
    };

    var shortenName = function (clazz, nameProperty) {
        if( clazz[nameProperty] === null ) {
            return;
        }

        var shortName = clazz[nameProperty].split( /\./ ).pop();
        shortName = typeof window[shortName] !== 'undefined' ? 'j' + shortName : shortName;

        if( typeof window[shortName] === 'undefined' ) {
            window[shortName] = clazz;
        }
    };

    /**
     * @param className
     * @param properties
     * @returns {qx.Class|Class|*}
     */
    var defineClass = function (className, properties) {
        jsavaConsole.group( className === null ? 'Defining new anonymous class' : 'Defining new class ' + className );

        var clazz = null;
        try {
            clazz = qx.Class.define( className, properties );

            inheritStatics( clazz );
            shortenName( clazz, 'classname' );
        } finally {
            jsavaConsole.groupEnd();
        }

        return clazz;
    };

    /**
     * @param interfaceName
     * @param properties
     * @returns {qx.Interface|Interface|*}
     */
    var defineInterface = function (interfaceName, properties) {
        var interfazz = null;
        try {
            interfazz = qx.Interface.define( interfaceName, properties );

            // TODO doesn't work because 'superclass' is not defined (use $$extends instead -> but this is an array)
            // inheritStatics( interfazz );

            shortenName( interfazz, 'name' );
        } finally {
            // TODO logging
        }

        return interfazz;
    };

    window['defineClass'] = defineClass;
    window['defineInterface'] = defineInterface;
})( window );
