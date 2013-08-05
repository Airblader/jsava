(function (namespace) {
    'use strict';

    function __import (clazz) {
        var indexOfLastPeriod = clazz.getArrayLastIndexOf( '.' ),
            clazzName = clazz.substring( indexOfLastPeriod + 1, clazz.length );
        // TODO

        if( typeof window[clazzName] !== 'undefined' ) {
            throw new Error( 'Class name conflict for <' + clazzName + '>!' );
        }

        window[clazzName] = window[clazz];
    }

    function __importStatic (method) {
        var indexOfLastPeriod = method.lastIndexOf( '.' ),
            clazz = method.substring( 0, indexOfLastPeriod ),
            methodName = method.substring( indexOfLastPeriod + 1, method.length );

        // TODO

        if( typeof window[methodName] !== 'undefined' ) {
            throw new Error( 'Method name conflict for <' + methodName + '>!' );
        }

        window[methodName] = window[clazz][methodName];
    }

    window[namespace] = {
        import: __import,
        importStatic: __importStatic
    };

})( 'javajs' );