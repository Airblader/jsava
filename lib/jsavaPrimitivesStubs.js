/**
 * This file provides the hashCode() method on Javascript's basic types.
 * Using this should generally be avoided in favor of the actual ported classes (Integer, String, …) as
 * these primitive types are the equivalent of Java's primitive types which don't have a hashCode method either.
 */

(function () {
    'use strict';

    var hashCodeFunctions = {
        'object': function (_this) {
            _this = Object( _this );

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

        'number': function (_this) {
            _this = Number( _this );

            return _this | 0;
        },

        'string': function (_this) {
            _this = String( _this );

            var hashCode = 0;
            for( var i = 0; i < _this.length; i++ ) {
                hashCode = (31 * hashCode + _this.charCodeAt( i )) << 0;
            }

            return hashCode;
        }
    };

    Number.prototype.hashCode = Number.prototype.hashCode || function () {
        return hashCodeFunctions['number']( this );
    };

    String.prototype.hashCode = String.prototype.hashCode || function () {
        return hashCodeFunctions['string']( this );
    };

    Object.prototype.hashCode = Object.prototype.hashCode || function () {
        return hashCodeFunctions['object']( this );
    };

    var equalsFunctions = {
        'object': function (_this, other) {
            _this = Object( _this );

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

        'number': function (_this, other) {
            _this = Number( _this );

            return typeof _this === typeof other && _this === other;
        },

        'string': function (_this, other) {
            _this = String( _this );

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

    Number.prototype.equals = Number.prototype.equals || function (other) {
        return equalsFunctions['number']( this, other );
    };

    String.prototype.equals = String.prototype.equals || function (other) {
        return equalsFunctions['string']( this, other );
    };

    Object.prototype.equals = Object.prototype.equals || function (other) {
        return equalsFunctions['object']( this, other );
    };
})();