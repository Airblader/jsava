(function (window, undefined) {
    'use strict';

    var qxInternals = ['$$implements', '$$extends', '$$flatImplements', '$$classtype'],
    // TODO make this jsava-global
        isLogEnabled = false;

    var inheritStatics = function (clazz) {
        var hierarchy = [clazz];
        while( hierarchy[hierarchy.length - 1].superclass !== qx.core.Object ) {
            hierarchy.push( hierarchy[hierarchy.length - 1].superclass );
        }

        for( var i = hierarchy.length - 1; i > 0; i-- ) {
            var baseClass = hierarchy[i - 1],
                superClass = hierarchy[i];

            for( var staticMember in superClass ) {
                // TODO private members should not be inherited
                if( !baseClass.hasOwnProperty( staticMember ) && qxInternals.indexOf( staticMember ) === -1 ) {
                    baseClass[staticMember] = superClass[staticMember];
                    isLogEnabled && console.info( 'inherited ' + superClass.classname + '.' + staticMember );
                }
            }
        }
    };

    var defineClass = function (className, properties) {
        isLogEnabled && console.group( 'Defining new class ' + className );

        var clazz = qx.Class.define( className, properties );
        inheritStatics( clazz );

        isLogEnabled && console.groupEnd();
        return clazz;
    };

    var defineInterface = function (interfaceName, properties) {
        return qx.Interface.define( interfaceName, properties );
    };

    window['defineClass'] = defineClass;
    window['defineInterface'] = defineInterface;
})( window );
