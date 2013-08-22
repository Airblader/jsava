/**
 * This file provides the hashCode() method on Javascript's basic types.
 * Using this should generally be avoided in favor of the actual ported classes (Integer, String, …) as
 * these primitive types are the equivalent of Java's primitive types which don't have a hashCode method either.
 */

(function () {
    'use strict';

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

            Object.defineProperty( Object.prototype, methodName, {
                value: mapper['object'],
                writable: true
            } );
        } else {
            Number.prototype[methodName] = mapper['number'];
            String.prototype[methodName] = mapper['string'];
            Object.prototype[methodName] = mapper['object'];
        }
    };

    var hashCodeFunctions = {
        'object': function () {
            var _this = Object( this );

            var hashCode = 0;
            for( var property in _this ) {
                if( !_this.hasOwnProperty( property )
                    || typeof _this[property] === 'undefined' || !_this[property].toString ) {
                    continue;
                }

                var temp = _this[property].toString();
                for( var i = 0; i < temp.length; i++ ) {
                    hashCode = (31 * hashCode + temp.charCodeAt( i )) << 0;
                }
            }

            return hashCode;
        },

        'number': function () {
            var _this = Number( this );

            return _this | 0;
        },

        'string': function () {
            var _this = String( this );

            var hashCode = 0;
            for( var i = 0; i < _this.length; i++ ) {
                hashCode = (31 * hashCode + _this.charCodeAt( i )) << 0;
            }

            return hashCode;
        }
    };

    var equalsFunctions = {
        'object': function (other) {
            var _this = Object( this );

            if( typeof other !== typeof _this ) {
                return false;
            }

            for( var property in _this ) {
                if( _this.hasOwnProperty( property )
                    && (!other.hasOwnProperty( property ) || _this[property] !== other[property]) ) {
                    return false;
                }
            }

            return true;
        },

        'number': function (other) {
            var _this = Number( this );

            return typeof _this === typeof other && _this === other;
        },

        'string': function (other) {
            var _this = String( this );

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
        }
    };

    assignMethods( 'hashCode', hashCodeFunctions );
    assignMethods( 'equals', equalsFunctions );
})();