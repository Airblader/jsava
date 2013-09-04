(function (root) {
    // TODO run as Jasmine test for better visibility

    /**
     * This script will iterate over the root object and traverse through it to find all qooxdoo-defined classes
     * that extend from jsava.lang.Object and verify that the super constructor was called.
     *
     * The reason for this is that in Java, a class constructor can either manually call any of the available super
     * constructors, or the compiler will call the no-arg, visible super constructor automatically. This behavior
     * differs from Javascript/qooxdoo, but is easy to forget. Therefore, this script will check for it.
     */

    'use strict';

    console.group( 'Verify that classes call super constructors' );
    var errors = [];

    var checkConstructor = function (Clazz) {
        if( Clazz === jsava.lang.Object ) {
            return;
        }

        var oldBase = Clazz.constructor.base;
        try {
            if( !checkBySpying( Clazz, oldBase ) ) {
                addClassToErrors( Clazz );
            }
        } catch( e ) {
            console.info( 'Checking %s by spying failed. Using fallback.', Clazz );

            if( !checkByToString( Clazz ) ) {
                addClassToErrors( Clazz );
            }
        } finally {
            Clazz.constructor.base = oldBase;
        }
    };

    var checkStaticsAndMembers = function (Clazz) {
        checkFields( Clazz );
        if( typeof Clazz.prototype !== 'undefined' ) {
            checkFields( Clazz.prototype );
        }
    };

    var checkFields = function (Clazz) {
        var fields = Object.keys( Clazz );
        for( var j = 0; j < fields.length; j++ ) {
            if( ['superclass', 'constructor', 'self', 'base'].indexOf( fields[j] ) !== -1 ) {
                continue;
            }

            var current = Clazz[fields[j]];

            if( isClass( current ) ) {
                checkConstructor( current );
                checkStaticsAndMembers( current );
            }
        }
    };

    var checkBySpying = function (Clazz, base) {
        var verified = false;
        Clazz.constructor.base = function () {
            verified = true;
            base.apply( this, arguments );
        };

        new Clazz();

        return verified;
    };

    var checkByToString = function (Clazz) {
        // TODO can be improved
        // usually the call is 'this.base( arguments ...)', but sometimes it is
        // 'this.base.apply', so this currently covers both
        return Function.prototype.toString.call( Clazz.constructor ).indexOf( 'this.base' ) !== -1;
    };

    var addClassToErrors = function (Clazz) {
        if( errors.indexOf( Clazz ) === -1 ) {
            errors.push( Clazz.classname );
        }
    };

    var isClass = function (obj) {
        return typeof obj !== 'undefined' && obj !== null
            && typeof obj.constructor !== 'undefined' && qx.Class.isSubClassOf( obj.constructor, jsava.lang.Object );
    };

    (function traversePackage (obj) {
        for( var i in obj ) {
            if( !Object.prototype.hasOwnProperty.call( obj, i ) ) {
                continue;
            }

            if( typeof obj[i] === 'object' ) {
                traversePackage( obj[i] );
            }

            if( !isClass( obj[i] ) ) {
                continue;
            }

            var Clazz = obj[i];
            try {
                checkConstructor( Clazz );
                checkStaticsAndMembers( Clazz );
            } catch( e ) {
                console.error( 'Error while checking %s', Clazz );
            }
        }
    })( root );

    if( errors.length !== 0 ) {
        console.error( 'Found errors during validation' );
        console.group( 'Classes with missing super constructor calls' );
        for( var i = 0; i < errors.length; i++ ) {
            console.debug( errors[i] );
        }
        console.groupEnd();
    }

    console.groupEnd();
})( jsava );