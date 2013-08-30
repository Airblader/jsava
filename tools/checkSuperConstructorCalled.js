(function (root) {
    /**
     * This script will iterate over the root object and traverse through it to find all qooxdoo-defined classes
     * that extend from jsava.lang.Object.
     * Any class found will first be tried to instanciate using a no-arg constructor, but the super constructor
     * will be proxied to verify whether it was called. If an exception is thrown, a fall-back solution comes into place
     * where the constructor will be stringified and searched for a call to the super constructor.
     *
     * The reason for this is that in Java, a class constructor can either manually call any of the available super
     * constructors, or the compiler will call the no-arg, visibile super constructor automatically. This behavior
     * differs from Javascript/qooxdoo, but is easy to forget. Therefore, this script will check for it.
     */

    'use strict';

    var wrongClasses = [];

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
        return Function.prototype.toString.call( Clazz.constructor ).indexOf( 'this.base' ) !== -1;
    };

    var addClassToErrors = function (Clazz) {
        wrongClasses.push( Clazz.basename );
    };

    (function traverse (obj) {
        for( var i in obj ) {
            if( !obj.hasOwnProperty( i ) ) {
                continue;
            }

            if( typeof obj[i] === 'object' ) {
                traverse( obj[i] );
            }

            var Clazz = obj[i];

            if( !qx.Class.isSubClassOf( Clazz.constructor, jsava.lang.Object ) ) {
                continue;
            }

            var oldBase = Clazz.constructor.base;
            try {
                if( !checkBySpying( Clazz, oldBase ) ) {
                    addClassToErrors( Clazz );
                }
            } catch( e ) {
                if( !checkByToString( Clazz ) ) {
                    addClassToErrors( Clazz );
                }
            } finally {
                Clazz.constructor.base = oldBase;
            }
        }
    })( root );

    // TODO what to do here?
    if( wrongClasses.length !== 0 ) {
        console.error( 'Found errors during super call validation: ' + wrongClasses.join( ', ' ) );
    }
})( jsava );