/**
 * This file provides the hashCode() method on Javascript's basic types.
 * Using this should generally be avoided in favor of the actual ported classes (Integer, String, …) as
 * these primitive types are the equivalent of Java's primitive types which don't have a hashCode method either.
 */

(function () {
    'use strict';

    var hashCodeFunctions = {
        'default': function (_this) {
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
            return _this | 0;
        },

        'string': function (_this) {
            var hashCode = 0;
            for( var i = 0; i < _this.length; i++ ) {
                hashCode = (31 * hashCode + _this.charCodeAt( i )) << 0;
            }

            return hashCode;
        }
    };

    Object.prototype.hashCode = Object.prototype.hashCode || function () {
        var type = hashCodeFunctions.hasOwnProperty( typeof this ) ? typeof this : 'default';
        return hashCodeFunctions[type]( this );
    };

    var equalsFunctions = {
        'default': function (_this, other) {
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
            return typeof _this === typeof other && _this === other;
        },

        'string': function (_this, other) {
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

    Object.prototype.equals = Object.prototype.equals || function (other) {
        var type = equalsFunctions.hasOwnProperty( typeof this ) ? typeof this : 'default';
        return equalsFunctions[type]( this, other );
    };
})();