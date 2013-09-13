(function (window, undefined) {
    'use strict';

    var Level = {
        INFO: 1,
        DEBUG: 2,
        LOG: 3,
        ERROR: 4,
        NONE: 5
    };

    var logLevel = Level["__JSAVALOGLEVEL__"] || Level.ERROR,
        showGroups = false;

    var jsavaConsole = {
        group: function () {
            if( showGroups && typeof window.console.group !== 'undefined' ) {
                window.console.group.apply( window.console, arguments );
            }
        },

        groupEnd: function () {
            if( showGroups && typeof window.console.groupEnd !== 'undefined' ) {
                window.console.groupEnd.apply( window.console, arguments );
            }
        },

        log: function () {
            if( logLevel <= Level.LOG && typeof window.console.log !== 'undefined' ) {
                window.console.log.apply( window.console, arguments );
            }
        },

        info: function () {
            if( logLevel <= Level.INFO && typeof window.console.info !== 'undefined' ) {
                window.console.info.apply( window.console, arguments );
            }
        },

        debug: function () {
            if( logLevel <= Level.DEBUG && typeof window.console.debug !== 'undefined' ) {
                window.console.debug.apply( window.console, arguments );
            }
        },

        error: function () {
            if( logLevel <= Level.ERROR && typeof window.console.error !== 'undefined' ) {
                window.console.error.apply( window.console, arguments );
            }
        },

        setLogLevel: function (level) {
            logLevel = level;
            showGroups = logLevel <= Level.LOG;
        }
    };

    jsavaConsole.setLogLevel( logLevel );
    window['jsavaConsole'] = jsavaConsole;
})( window );