(function (window) {
    'use strict';

    if( typeof window === 'undefined' ) {
        return;
    }

    // DO NOT EDIT -- will be replaced in compile.pl
    var compileOrder = [];

    var Cache = new (function () {
        var __cache = {};

        this.Status = {
            CHECKED: 0,
            SHORTENED: 1
        };

        this.setStatus = function (clazz, status) {
            __cache[clazz] = status;
        };
    });

    var getShortName = function (clazz) {
        return clazz.split( /\./ ).pop();
    };

    var getClass = function (clazz) {
        var __clazz = window,
            parts = clazz.split( /\./ );
        for( var i = 0; i < parts.length; i++ ) {
            __clazz = __clazz[parts[i]];
        }

        return __clazz;
    };

    for( var i = 0; i < compileOrder.length; i++ ) {
        var clazz = getShortName( compileOrder[i] );

        // if clazz is already taken (e.g. for "Object"), try another short name for it.
        if( typeof window[clazz] !== 'undefined' ) {
            clazz = 'j' + clazz;
        }

        if( typeof window[clazz] === 'undefined' ) {
            window[clazz] = getClass( compileOrder[i] );
            Cache.setStatus( clazz, Cache.Status.SHORTENED );
        } else {
            Cache.setStatus( clazz, Cache.Status.CHECKED );
        }
    }
})( window );