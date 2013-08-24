/**
 * This file provides basic methods like hashCode() and equals() on Javascript's basic types.
 * Using this should generally be avoided in favor of the actual ported classes (Integer, String, …) as
 * these primitive types are the equivalent of Java's primitive types which don't have a hashCode method either.
 */

(function () {
    'use strict';

    if( !Object.keys ) {
        throw new Error( 'Object.keys is not available' );
    }

    var assignMethods = function (methodName, mapper) {
        if( Object.defineProperty ) {
            Object.defineProperty( Number.prototype, methodName, {
                value: mapper['number'],
                writable: true
            } );

            Object.defineProperty( String.prototype, methodName, {
                value: mapper['string'],
                writable: true
            } );

            Object.defineProperty( Boolean.prototype, methodName, {
                value: mapper['boolean'],
                writable: true
            } );

            Object.defineProperty( Object.prototype, methodName, {
                value: mapper['object'],
                writable: true
            } );
        } else {
            Number.prototype[methodName] = mapper['number'];
            String.prototype[methodName] = mapper['string'];
            Boolean.prototype[methodName] = mapper['boolean'];
            Object.prototype[methodName] = mapper['object'];
        }
    };

    var hashCodeFunctions = {
        'object': function () {
            var _this = this.valueOf();

            var keys = Object.keys( _this ).sort(),
                hashCode = 0;

            for( var i = 0, l = keys.length; i < l; i++ ) {
                var key = keys[i];
                if( typeof _this[key] === 'undefined' ) {
                    continue;
                }

                var temp = key.toString() + ':' + _this[key].toString();
                for( var i = 0; i < temp.length; i++ ) {
                    hashCode = (31 * hashCode + temp.charCodeAt( i )) << 0;
                }
            }

            return hashCode;
        },

        'number': function () {
            return this.valueOf() | 0;
        },

        'string': function () {
            var _this = this.valueOf();

            var hashCode = 0;
            for( var i = 0; i < _this.length; i++ ) {
                hashCode = (31 * hashCode + _this.charCodeAt( i )) << 0;
            }

            return hashCode;
        },

        'boolean': function () {
            return this.valueOf() ? 1231 : 1237;
        }
    };

    var equalsFunctions = {
        'object': function (other) {
            var _this = this.valueOf();

            if( typeof other !== typeof _this ) {
                return false;
            }

            for( var property in _this ) {
                if( !_this.hasOwnProperty( property ) ) {
                    continue;
                }

                if( !other.hasOwnProperty( property ) ) {
                    return false;
                }

                if( _this[property].equals ) {
                    if( !_this[property].equals( other[property] ) ) {
                        return false;
                    }
                } else {
                    if( _this[property] !== other[property] ) {
                        return false;
                    }
                }
            }

            return true;
        },

        'number': function (other) {
            return this.valueOf() === other;
        },

        'string': function (other) {
            var _this = this.valueOf();

            if( typeof other !== typeof _this ) {
                return false;
            }

            if( _this.length !== other.length ) {
                return false;
            }

            for( var i = 0; i < _this.length; i++ ) {
                if( _this[i] !== other[i] ) {
                    return false;
                }
            }

            return true;
        },

        'boolean': function (other) {
            return this.valueOf() === other;
        }
    };

    assignMethods( 'hashCode', hashCodeFunctions );
    assignMethods( 'equals', equalsFunctions );
})();