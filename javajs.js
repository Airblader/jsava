(function (namespace) {
    'use strict';

    function __import (clazz) {
        var indexOfLastPeriod = clazz.lastIndexOf( '.' ),
            clazzName = clazz.substring( indexOfLastPeriod + 1, clazz.length );
        
        // TODO improve to not need jQuery
        $.getScript( clazz.replace(/\./g, '/') + '.js')
            .done( function () {
                var _clazz = window,
                    packages = clazz.split(/\./);
                for( var i = 0; i < packages.length; i++ ) {
                    _clazz = _clazz[packages[i]];
                }

                window[clazzName] = _clazz;
            } );


        //if( typeof window[clazzName] !== 'undefined' ) {
        //    throw new Error( 'Class name conflict for <' + clazzName + '>!' );
        //}
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
        // TODO : several files, optional namespace shortening
        import: __import,
        // use import without namespace shortening, then shorten only method
        importStatic: __importStatic
    };

})( 'javajs' );
