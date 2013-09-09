(function (window, undefined) {
    'use strict';

    var qxInternals = ['$$implements', '$$extends', '$$flatImplements', '$$classtype', '$$inheritedStatics'],
        isLogEnabled = true;

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
                if( !baseClass.hasOwnProperty( staticMember ) && qxInternals.indexOf( staticMember ) === -1 ) {
                    baseClass[staticMember] = superClass[staticMember];
                    isLogEnabled && console.info( baseClass.classname + ': inherited '
                        + superClass.classname + '.' + staticMember );
                }
            }

            baseClass.$$inheritedStatics = true;
        }
    };

    /**
     * @param className
     * @param properties
     * @returns {qx.Class|Class|*}
     */
    var defineClass = function (className, properties) {
        isLogEnabled && console.group(
            className === null ? 'Defining new anonymous class' : 'Defining new class ' + className );

        var clazz = null;
        try {
            clazz = qx.Class.define( className, properties );
            inheritStatics( clazz );
        } finally {
            isLogEnabled && console.groupEnd();
        }

        return clazz;
    };

    /**
     * @param interfaceName
     * @param properties
     * @returns {qx.Interface|Interface|*}
     */
    var defineInterface = function (interfaceName, properties) {
        return qx.Interface.define( interfaceName, properties );
    };

    window['defineClass'] = defineClass;
    window['defineInterface'] = defineInterface;
})( window );
