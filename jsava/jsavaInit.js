(function (window, undefined) {
    'use strict';

    var inheritStatics = function (clazz) {
        var hierarchy = [clazz],
            currentSuperclass = null;
        while( (currentSuperclass = hierarchy[hierarchy.length - 1].superclass) !== qx.core.Object
            && typeof hierarchy[hierarchy.length - 1].$$inheritedStatics === 'undefined' ) {
            hierarchy.push( currentSuperclass );
        }

        for( var i = hierarchy.length - 1; i > 0; i-- ) {
            var baseClass = hierarchy[i - 1],
                superClass = hierarchy[i];

            for( var staticMember in superClass ) {
                // TODO private members should not be inherited
                if( !baseClass.hasOwnProperty( staticMember )
                    && String.prototype.substring.call( staticMember, 0, 2 ) !== '$$' ) {

                    baseClass[staticMember] = superClass[staticMember];
                    jsavaConsole.info( baseClass.classname + ': inherited '
                        + superClass.classname + '.' + staticMember );
                }
            }

            baseClass.$$inheritedStatics = true;
        }
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
