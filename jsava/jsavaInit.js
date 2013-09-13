(function (window, undefined) {
    'use strict';

    var inheritStatics = function (clazz) {
        if( clazz.superclass === qx.core.Object ) {
            return;
        }

        // TODO use Object.keys
        for( var staticMember in clazz.superclass ) {
            if( !clazz.hasOwnProperty( staticMember )
                && String.prototype.substring.call( staticMember, 0, 2 ) !== '$$' ) {

                (function (superClass, staticMember) {
                    Object.defineProperty( clazz, staticMember, {
                        configurable: true,
                        enumerable: true,

                        get: function () {
                            return superClass[staticMember];
                        },

                        set: function (value) {
                            superClass[staticMember] = value;
                        }
                    } );
                })( clazz.superclass, staticMember );

                jsavaConsole.info( clazz.classname + ': inherited ' + clazz.superclass.classname + '.' + staticMember );
            }
        }

        clazz.$$inheritedStatics = true;
    };

    // TOOD refactor to unify both inheritance methods, at least partly
    // TODO write tests for this
    var inheritStaticsForInterface = function (interfazz) {
        if( typeof interfazz.$$extends === 'undefined' ) {
            return;
        }

        for( var i = 0; i < interfazz.$$extends.length; i++ ) {
            var superInterfazz = interfazz.$$extends[i],
                keys = Object.keys( superInterfazz );
            for( var i = 0; i < keys.length; i++ ) {
                var key = keys[i];

                if( !interfazz.hasOwnProperty( key ) && String.prototype.substring.call( key, 0, 2 ) !== '$$' ) {
                    (function (superInterfazz, key) {
                        Object.defineProperty( interfazz, key, {
                            configurable: true,
                            enumerable: true,

                            get: function () {
                                return superInterfazz[key];
                            },

                            set: function (value) {
                                superInterfazz[key] = value;
                            }
                        } );
                    })( superInterfazz, key );

                    jsavaConsole.info( interfazz.name + ': inherited ' + superInterfazz.name + '.' + key );
                }
            }
        }
    };

    var shortenName = function (clazz, nameProperty) {
        if( clazz[nameProperty] === null ) {
            return;
        }

        var shortName = clazz[nameProperty].split( /\./ ).pop();
        shortName = typeof window[shortName] !== 'undefined' ? 'j' + shortName : shortName;

        if( typeof window[shortName] === 'undefined' ) {
            window[shortName] = clazz;
        }
    };

    /**
     * @param className
     * @param properties
     * @returns {qx.Class|Class|*}
     */
    var defineClass = function (className, properties) {
        jsavaConsole.group( className === null ? 'Defining new anonymous class' : 'Defining new class ' + className );

        var clazz = null;
        try {
            clazz = qx.Class.define( className, properties );

            inheritStatics( clazz );
            shortenName( clazz, 'classname' );
        } finally {
            jsavaConsole.groupEnd();
        }

        return clazz;
    };

    /**
     * @param interfaceName
     * @param properties
     * @returns {qx.Interface|Interface|*}
     */
    var defineInterface = function (interfaceName, properties) {
        jsavaConsole.group( interfaceName === null ? 'Defining new anonymous interface' : 'Defining new interface '
            + interfaceName );

        var interfazz = null;
        try {
            interfazz = qx.Interface.define( interfaceName, properties );

            inheritStaticsForInterface( interfazz );
            shortenName( interfazz, 'name' );
        } finally {
            jsavaConsole.groupEnd();
        }

        return interfazz;
    };

    window['defineClass'] = defineClass;
    window['defineInterface'] = defineInterface;
})( window );
