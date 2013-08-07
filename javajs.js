(function () {
    'use strict';

    var __cache = {};

    function __shortenName (fullName) {
        var shortName = fullName.substring( fullName.lastIndexOf( '.' ) + 1, fullName.length );

        if( typeof window[shortName] !== 'undefined' ) {
            log( 'Name ' + shortName + ' already in use' );
            return;
        }

        var __clazz = window,
            packages = fullName.split( '.' );
        for( var i = 0; i < packages.length; i++ ) {
            __clazz = __clazz[packages[i]];
        }

        window[shortName] = __clazz;
        __cache[fullName] = true;

        log( 'Shortened ' + fullName + ' to ' + shortName );
    }

    function log (msg) {
        console.log( msg );
    }

    function __import (target, doShorten) {
        if( typeof target === 'undefined' || target === null || target.replace( /\s*/, '' ) === '' || target === 'qx.core.Object' ) {
            return;
        }

        log( 'Importing ' + target );
        doShorten = (typeof doShorten === 'undefined') ? true : doShorten;

        if( __cache.hasOwnProperty( target ) ) {
            log( 'Target ' + target + ' already in cache' );

            if( __cache[target] === false && doShorten ) {
                __shortenName( target );
            }

            return;
        }

        // TODO improve to not need jQuery
        var done = false;
        $.ajax( {
            url: 'src/' + target.replace( /\./g, '/' ) + '.js',
            dataType: 'text',
            async: false
        } )
            .done( function (content) {
                // TODO there has to be a wait for this
                // TODO be more precise in the unlikely case it appears in the source
                var regExpInterfaces = content.match( /implement\s*:\s*(?:([^\[]+?),|\[\s*(.+?)\s*\]\s*,)/m ),
                    listOfInterfaces = [];
                if( regExpInterfaces !== null ) {
                    if( typeof regExpInterfaces[1] !== 'undefined' ) {
                        listOfInterfaces = [regExpInterfaces[1]];
                    } else if( typeof regExpInterfaces[2] !== 'undefined' ) {
                        listOfInterfaces = regExpInterfaces[2].replace( /\s*/g, '' ).split( /,/ );
                    }
                }

                for( var i = 0; i < listOfInterfaces.length; i++ ) {
                    __import( listOfInterfaces[i].name, false );
                }

                var regExpInheritance = content.match( /extend\s*:\s*(.+?),/m );
                if( regExpInheritance !== null && typeof regExpInheritance[1] !== 'undefined' ) {
                    __import( regExpInheritance[1].replace( /\s*/g, '' ) );
                }

                $.globalEval( content );
                done = true;

                log( 'Imported ' + target );
                __cache[target] = false;

                if( doShorten ) {
                    __shortenName( target );
                }

                // TODO scan script content for more classes?
            } )
            .fail( function () {
                console.log( arguments );
            } );

        while( !done ) {
            // TODO hacky workaround
        }
    }

    // TODO other name
    window['jimport'] = function () {
        var clazzes = Array.prototype.slice.call( arguments );
        for( var i = 0; i < clazzes.length; i++ ) {
            __import( clazzes[i], true );
        }
    };

    // TODO import static methods (check for name conflicts)
})();
