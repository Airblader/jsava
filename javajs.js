(function (isDebug) {
    'use strict';

    var __cache = {},
        CacheStatus = {
            NEW: 0,
            LOADED_UNSHORTENED: 1,
            LOADED_SHORTENED: 2,
            LOADED_UNSHORTENED_CHECKED: 3
        },
        getCacheStatus = function (target) {
            return typeof __cache[target] !== 'undefined' ? __cache[target] : CacheStatus.NEW;
        };

    function __shortenName (fullName) {
        __cache[fullName] = CacheStatus.LOADED_UNSHORTENED_CHECKED;
        var shortName = fullName.substring( fullName.lastIndexOf( '.' ) + 1, fullName.length );

        if( typeof window[shortName] !== 'undefined' ) {
            log( fullName, 'shorted name already in use' );
            return;
        }

        var __clazz = window,
            packages = fullName.split( '.' );
        for( var i = 0; i < packages.length; i++ ) {
            __clazz = __clazz[packages[i]];
        }

        window[shortName] = __clazz;
        __cache[fullName] = CacheStatus.LOADED_UNSHORTENED;

        log( fullName, 'shortened to <' + shortName + '>' );
    }

    function log (target, msg) {
        if( isDebug && console && console.log ) {
            console.log( '[' + target + '] ' + msg );
        }
    }

    function getRequiredClasses (content) {
        var requiredClasses = [];

        // TODO be more specific as this could appear in the source code
        var regExpInterfaces = /implement\s*:\s*(?:([^\[]+?),|\[\s*(.+?)\s*\]\s*,)/mg,
            matchesA;
        while( (matchesA = regExpInterfaces.exec( content )) !== null ) {
            if( typeof matchesA[1] !== 'undefined' ) {
                requiredClasses.push( matchesA[1].replace( /\s*/g, '' ) );
            } else {
                var interfazzes = matchesA[2].replace( /\s*/g, '' ).split( /,/ );
                for( var i = 0; i < interfazzes.length; i++ ) {
                    requiredClasses.push( interfazzes[i] );
                }
            }
        }

        var regExpInheritance = /(?:extend\s*:\s*)(.+?),/mg,
            matchesB;
        while( (matchesB = regExpInheritance.exec( content )) !== null ) {
            requiredClasses.push( matchesB[1].replace( /\s*/g, '' ) );
        }

        return requiredClasses;
    }

    function __import (target, doShorten) {
        if( typeof target === 'undefined' || target === null
            || target.replace( /\s*/, '' ) === '' || target === 'qx.core.Object' ) {
            return;
        }

        log( target, 'starting import...' );

        doShorten = (typeof doShorten === 'undefined') ? true : doShorten;

        var cacheStatus = getCacheStatus( target );
        if( cacheStatus !== CacheStatus.NEW ) {
            if( cacheStatus === CacheStatus.LOADED_UNSHORTENED && doShorten ) {
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
                var requiredClasses = getRequiredClasses( content );
                if( requiredClasses.length !== 0 ) {
                    log( target, 'requires classes [' + requiredClasses + ']' );
                }

                for( var i = 0; i < requiredClasses.length; i++ ) {
                    __import( requiredClasses[i], false );
                }

                if( requiredClasses.length !== 0 ) {
                    log( target, 'all required classes imported' );
                }

                $.globalEval( content );
                done = true;

                log( target, 'imported' );
                __cache[target] = CacheStatus.LOADED_UNSHORTENED;

                if( doShorten ) {
                    __shortenName( target );
                }

                // TODO scan script content for more classes?
            } )
            .fail( function () {
                log( target, 'failed to import [' + arguments + ']' );
                done = true;
            } );

        while( !done ) {
            // TODO hacky workaround
        }
    }

    // TODO other name (also change in generator script)
    window['jimport'] = function () {
        var clazzes = Array.prototype.slice.call( arguments );
        for( var i = 0; i < clazzes.length; i++ ) {
            __import( clazzes[i], true );
        }
    };

    // TODO remove
    window['showCache'] = function () {
        return __cache;
    };

    // TODO import static methods (check for name conflicts)
})( true );