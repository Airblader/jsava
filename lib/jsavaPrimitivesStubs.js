/**
 * This file provides the hashCode() method on Javascript's basic types.
 * Using this should generally be avoided in favor of the actual ported classes (Integer, String, …) as
 * these primitive types are the equivalent of Java's primitive types which don't have a hashCode method either.
 */

(function () {
    'use strict';

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

    if( Object.defineProperty ) {

        Object.defineProperty( Number.prototype, 'hashCode', {
            value: hashCodeFunctions['number']
        } );

        Object.defineProperty( String.prototype, 'hashCode', {
            value: hashCodeFunctions['string']
        } );

        Object.defineProperty( Object.prototype, 'hashCode', {
            value: hashCodeFunctions['object']
        } );

    } else {

        Number.prototype.hashCode = Number.prototype.hashCode || function () {
            return hashCodeFunctions['number'].apply( this, arguments );
        };

        String.prototype.hashCode = String.prototype.hashCode || function () {
            return hashCodeFunctions['string'].apply( this, arguments );
        };

        Object.prototype.hashCode = Object.prototype.hashCode || function () {
            return hashCodeFunctions['object'].apply( this, arguments );
        };

    }

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

    if( Object.defineProperty ) {

        Object.defineProperty( Number.prototype, 'equals', {
            value: equalsFunctions['number'],
            writable: true
        } );

        Object.defineProperty( String.prototype, 'equals', {
            value: equalsFunctions['string'],
            writable: true
        } );

        Object.defineProperty( Object.prototype, 'equals', {
            value: equalsFunctions['object'],
            writable: true
        } );

    } else {

        Number.prototype.equals = Number.prototype.equals || function (other) {
            return equalsFunctions['number'].apply( this, arguments );
        };

        String.prototype.equals = String.prototype.equals || function (other) {
            return equalsFunctions['string'].apply( this, arguments );
        };

        Object.prototype.equals = Object.prototype.equals || function (other) {
            return equalsFunctions['object'].apply( this, arguments );
        };

    }
})();