(function () {
    'use strict';

    /**
     * Hash codes for arrays do not depend on their content, so we need to keep
     * track and assign a new hash code to every new array. We start with the smallest
     * number we can represent.
     * Note, that this may lead to collisions with hash codes of other objects, but we can safely
     * ignore this as it is allowed by the hash code contract.
     */
    var arrayHashCode = -9007199254740992;

    // TODO : add a shim or implement a version that doesn't need this
    if( !Object.keys ) {
        throw new Error( 'Object.keys is not available' );
    }

    /**
     * Assigns different implementations of a method to Javascript's built-in
     * types Object, Array, Boolean, String and Number.
     * If Object.defineProperty is available, it will be used to prevent the methods from appearing in enumerations,
     * but if not, a fallback is available to add the methods to the type's prototype.
     * @param {String} methodName Name of the method
     * @param {Object} mapper Object containing the implementations of each type, wherein the key is the lowercase
     * name of the corresponding type
     */
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

            Object.defineProperty( Array.prototype, methodName, {
                value: mapper['array'],
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
            Array.prototype[methodName] = mapper['array'];
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

        'array': function () {
            var _this = this.valueOf();

            if( typeof _this.__jsava_hash === 'undefined' ) {
                // TODO maybe move this check so that it doesn't have to be executed everytime a hash code is calculated
                if( Object.defineProperty ) {
                    Object.defineProperty( _this, '__jsava_hash', {
                        value: arrayHashCode++,
                        enumerable: false,
                        writable: false
                    } );
                } else {
                    _this.__jsava_hash = arrayHashCode++;
                }
            }

            return _this.__jsava_hash;
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

        'array': function (other) {
            return this.valueOf() === other;
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