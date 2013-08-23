/**
 * This file provides basic methods like hashCode() and equals() on Javascript's basic types.
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
})();qx.Interface.define( 'jsava.io.Serializable', {
} );

qx.Class.define( 'jsava.lang.Object', {
    extend: qx.core.Object,

    members: {
        /**
         * @returns {String}
         */
        getClass: function () {
            // TODO return Class object
            return this.name;
        },

        /** @returns {String} */
        getClassName: function () {
            // TODO remove this method and replace with getClass().getName()
            return this.name;
        },

        /**
         * @returns {Number}
         */
        hashCode: function () {
            var hashCode = 0;

            for( var property in this ) {
                if( !this.hasOwnProperty( property )
                    || typeof this[property] === 'undefined' || this[property] === null ) {
                    continue;
                }

                hashCode = 31 * hashCode + this[property].hashCode();
            }

            return hashCode;
        },

        /**
         * @param other
         * @returns {Boolean}
         */
        equals: function (other) {
            return this === other;
        },

        clone: function () {
            var result;
            try {
                result = this.base( arguments );
            } finally {
                for( var property in this ) {
                    if( !this.hasOwnProperty( property ) || result.hasOwnProperty( property ) ) {
                        continue;
                    }

                    result[property] = this[property];
                }
            }

            return result;
        },

        /**
         * @returns {String}
         */
        toString: function () {
            return this.getClass().name + '@' + this.hashCode().toString( 16 );
        },

        notify: function () {
            // TODO
            throw new jsava.lang.UnsupportedOperationException();
        },

        notifyAll: function () {
            // TODO
            throw new jsava.lang.UnsupportedOperationException();
        },

        wait: function () {
            // TODO
            throw new jsava.lang.UnsupportedOperationException();
        },

        finalize: function () {
            throw new jsava.lang.UnsupportedOperationException();
        }
    }
} );

qx.Class.define( 'jsava.lang.Throwable', {
    extend: jsava.lang.Object,
    implement: [jsava.io.Serializable],

    construct: function () {
        var args = Array.prototype.slice.call( arguments );
        this.fillInStackTrace();
        this.__cause = this;

        if( args.length === 1
            && qx.Class.isSubClassOf( args[0].constructor, jsava.lang.Throwable ) ) {
            this.__detailMessage = (args[0] === null) ? null : args[0].toString();
            this.__cause = args[0];
        } else if( args.length >= 1 && typeof args[0] === 'string' ) {
            this.__detailMessage = args[0];

            if( args.length === 2
                && qx.Class.isSubClassOf( args[1].constructor, jsava.lang.Throwable ) ) {
                this.__cause = args[1];
            }
        }
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    },

    members: {
        __detailMessage: null,
        /** @type jsava.lang.Throwable */
        __cause: null,
        __stackTrace: null,

        getMessage: function () {
            return this.__detailMessage;
        },

        getLocalizedMessage: function () {
            return this.getMessage();
        },

        getCause: function () {
            return this.__cause;
        },

        initCause: function (cause) {
            if( this.__cause !== this ) {
                throw new jsava.lang.IllegalStateException( 'Can\'t overwrite cause' );
            }
            if( cause === this ) {
                throw new jsava.lang.IllegalArgumentException( 'Self-causation is not permitted' );
            }

            this.__cause = cause;
            return this;
        },

        toString: function () {
            var className = this.getClassName(),
                message = this.getLocalizedMessage();
            return message !== null ? (className + ': ' + message) : className;
        },

        printStackTrace: function () {
            // TODO other method signatures
            if( console && console.error ) {
                console.error( this.__stackTrace );
            }
        },

        fillInStackTrace: function () {
            this.__stackTrace = new Error().stack;
        },

        getStackTrace: function () {
            return this.__stackTrace;
        },

        setStackTrace: function (stackTrace) {
            this.__stackTrace = stackTrace;
        }
    }
} );

qx.Class.define( 'jsava.lang.Exception', {
    extend: jsava.lang.Throwable,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    }
} );

qx.Class.define( 'jsava.lang.RuntimeException', {
    extend: jsava.lang.Exception,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    }
} );

qx.Class.define( 'jsava.lang.IndexOutOfBoundsException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    }
} );

qx.Class.define( 'jsava.lang.IllegalArgumentException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    }
} );

qx.Class.define( 'jsava.lang.CloneNotSupportedException', {
    extend: jsava.lang.Exception,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    }
} );

qx.Class.define( 'jsava.lang.NullPointerException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    }
} );

qx.Interface.define( 'jsava.lang.Cloneable', {
} );

qx.Class.define( 'jsava.lang.System', {
    // TODO much more stuff implement

    extend: jsava.lang.Object,

    type: 'static',

    statics: {
        /**
         * @param {jsava.lang.Object} src
         * @param {Number} srcPos
         * @param {jsava.lang.Object} dest
         * @param {Number} destPos
         * @param {Number} length
         */
        arraycopy: function (src, srcPos, dest, destPos, length) {
            var temp = Array.prototype.slice.call( src );

            for( var i = 0; i < length; i++ ) {
                dest[destPos + i] = temp[srcPos + i];
            }
        }
    }
} );

qx.Class.define( 'jsava.lang.ClassCastException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    }
} );

qx.Class.define( 'jsava.lang.IllegalStateException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    }
} );

qx.Interface.define( 'jsava.lang.Iterable', {
    members: {
        /**
         * Returns an iterator
         *
         * @return {jsava.util.Iterator} an iterator
         */
        iterator: function () {
        }
    }
} );

qx.Class.define( 'jsava.lang.UnsupportedOperationException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    }
} );

qx.Class.define( 'jsava.lang.NoSuchElementException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    }
} );

qx.Class.define( 'jsava.lang.ConcurrentModificationException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    }
} );

qx.Class.define( 'jsava.JsavaUtils', {
    extend: qx.core.Object,

    type: 'static',

    statics: {
        /**
         * Creates an anonymous class and returns it.
         * @returns {*}
         */
        createAnonymousClass: function (config) {
            var clazzName = 'Anonymous';

            var clazz = qx.Class.define( clazzName, config );
            qx.Class.undefine( clazzName );

            return clazz;
        },

        /**
         * Creates and returns an array of given size.
         * @param size
         * @param defaultValue will default to null
         * @returns {Array}
         */
        arrayOfGivenSize: function (size, defaultValue) {
            if( typeof defaultValue === 'undefined' ) {
                defaultValue = null;
            }

            var result = [];
            for( var i = 0; i < size; i++ ) {
                result[i] = defaultValue;
            }

            return result;
        }
    }
} );

qx.Interface.define( 'jsava.util.Collection', {
    extend: jsava.lang.Iterable,

    members: {
        /**
         * @return {Integer}
         */
        size: function () {
        },

        /**
         * @return {Boolean}
         */
        isEmpty: function () {
        },

        /**
         * @param {jsava.lang.Object} obj
         * @return {Boolean}
         */
        contains: function (obj) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        /**
         * @inheritDoc
         */
        iterator: function () {
        },

        /**
         * @return {jsava.lang.Object[]}
         */
        toArray: function () {
        },

        /**
         * @param elem
         * @return {Boolean}
         */
        add: function (elem) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        /**
         * @param obj
         * @return {Boolean}
         */
        remove: function (obj) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        containsAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        addAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        removeAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        retainAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        clear: function () {
        },

        /**
         * @param {jsava.lang.Object} other
         * @return {Boolean}
         */
        equals: function (other) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        /**
         * @return {Integer}
         */
        hashCode: function () {
        }
    }
} );

qx.Interface.define( 'jsava.util.Set', {
    extend: jsava.util.Collection,

    members: {
        size: function () {
        },

        isEmpty: function () {
        },

        contains: function (obj) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        iterator: function () {
        },

        toArray: function () {
        },

        add: function (elem) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        remove: function (elem) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        containsAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        addAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        retainAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        removeAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        clear: function () {
        },

        equals: function (other) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        hashCode: function () {
        }
    }
} );

qx.Interface.define( "jsava.util.Map", {
    statics : {
        Entry: qx.Interface.define( 'jsava.util.Map.Entry', {
            members: {
                getKey: function () {
                },

                getValue: function () {
                },

                setValue: function (value) {
                },

                equals: function (other) {
                },

                hashCode: function () {
                }
            }
        } )
    },

    members: {
        /**
         * @return {Integer}
         */
        size: function () {
        },

        /**
         * @return {Boolean}
         */
        isEmpty: function () {
        },

        /**
         * @param {jsava.lang.Object} key
         * @return {Boolean}
         */
        containsKey: function (key) {
        },

        /**
         * @param {jsava.lang.Object} value
         * @return {Boolean}
         */
        containsValue: function (value) {
        },

        get: function (key) {
        },

        put: function (key, value) {

        },

        remove: function (key) {
        },

        putAll: function (map) {
        },

        clear: function () {

        },

        /**
         * @return {jsava.util.Set}
         */
        keySet: function () {
        },

        /**
         * @return {jsava.util.Collection}
         */
        values: function () {
        },

        /**
         * @return {jsava.util.Set}
         */
        entrySet: function () {
        },

        /**
         * @param other
         * @return {Boolean}
         */
        equals: function (other) {
        },

        /**
         * @return {Integer}
         */
        hashCode: function () {
        }
    }
} );

qx.Interface.define( 'jsava.util.Iterator', {
    members: {
        /**
         * @return {Boolean}
         */
        hasNext: function () {
        },

        /**
         * @return {*}
         */
        next: function () {
        },

        remove: function () {
        }
    }
} );

qx.Class.define( 'jsava.util.AbstractCollection', {
    extend: jsava.lang.Object,
    implement: [jsava.util.Collection],

    type: 'abstract',

    /** @protected */
    construct: function () {
    },

    members: {
        /** @abstract */
        iterator: function () {
        },

        /** @abstract */
        size: function () {
        },

        isEmpty: function () {
            return this.size() === 0;
        },

        contains: function (obj) {
            var iterator = this.iterator();
            if( obj === null ) {
                while( iterator.hasNext() ) {
                    if( iterator.next() === null ) {
                        return true;
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    if( obj.equals( iterator.next() ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        toArray: function () {
            if( Array.prototype.slice.call( arguments ).length !== 0 ) {
                // TODO overloaded signature
                throw new jsava.lang.UnsupportedOperationException();
            }

            /** @type jsava.lang.Object[] */
            var result = [],
                iterator = this.iterator();
            while( iterator.hasNext() ) {
                result.push( iterator.next() );
            }

            return result;
        },

        add: function (elem) {
            throw new jsava.lang.UnsupportedOperationException();
        },

        remove: function (obj) {
            var iterator = this.iterator();
            if( obj === null ) {
                while( iterator.hasNext() ) {
                    if( iterator.next() === null ) {
                        iterator.remove();
                        return true;
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    if( obj.equals( iterator.next() ) ) {
                        iterator.remove();
                        return true;
                    }
                }
            }

            return false;
        },

        containsAll: function (collection) {
            var iterator = collection.iterator();
            while( iterator.hasNext() ) {
                if( !this.contains( iterator.next() ) ) {
                    return false;
                }
            }

            return true;
        },

        addAll: function (collection) {
            var modified = false,
                iterator = collection.iterator();
            while( iterator.hasNext() ) {
                if( this.add( iterator.next() ) ) {
                    modified = true;
                }
            }

            return modified;
        },

        removeAll: function (collection) {
            var modified = false,
                iterator = this.iterator();
            while( iterator.hasNext() ) {
                if( collection.contains( iterator.next() ) ) {
                    iterator.remove();
                    modified = true;
                }
            }

            return modified;
        },

        retainAll: function (collection) {
            var modified = false,
                iterator = this.iterator();
            while( iterator.hasNext() ) {
                if( !collection.contains( iterator.next() ) ) {
                    iterator.remove();
                    modified = true;
                }
            }

            return modified;
        },

        clear: function () {
            var iterator = this.iterator();
            while( iterator.hasNext() ) {
                iterator.next();
                iterator.remove();
            }
        },

        toString: function () {
            var iterator = this.iterator();
            if( !iterator.hasNext() ) {
                return '[]';
            }

            // TODO use StringBuilder
            var result = '[';
            for( ; ; ) {
                var element = iterator.next();
                result += element === this ? '(this Collection)' : element;
                if( !iterator.hasNext() ) {
                    return result + ']';
                }

                result += ', ';
            }
        }
    }
} );

qx.Class.define( 'jsava.util.AbstractSet', {
    extend: jsava.util.AbstractCollection,
    implement: [jsava.util.Set],

    type: 'abstract',

    /** @protected */
    construct: function () {
    },

    members: {
        equals: function (obj) {
            if( obj === this ) {
                return true;
            }

            if( obj === null ) {
                return false;
            }

            if( !qx.Class.implementsInterface( obj, jsava.util.Set ) ) {
                return false;
            }

            /** @implements jsava.util.Collection */
            var collection = obj;

            if( collection.size() !== this.size() ) {
                return false;
            }

            try {
                return this.containsAll( collection );
            } catch( e ) {
                if( qx.Class.isSubClassOf( e.constructor, jsava.lang.ClassCastException )
                    || qx.Class.isSubClassOf( e.constructor, jsava.lang.NullPointerException ) ) {
                    return false;
                }

                throw e;
            }
        },

        hashCode: function () {
            var hashCode = 0,
                iterator = this.iterator();
            while( iterator.hasNext() ) {
                var obj = iterator.next();
                if( obj !== null ) {
                    hashCode += obj.hashCode();
                }
            }

            return hashCode;
        },

        removeAll: function (collection) {
            var modified = false,
                iterator;

            if( this.size > collection.size() ) {
                iterator = collection.iterator();
                while( iterator.hasNext() ) {
                    modified = this.remove( iterator.next() ) || modified;
                }
            } else {
                iterator = this.iterator();
                while( iterator.hasNext() ) {
                    if( collection.contains( iterator.next() ) ) {
                        iterator.remove();
                        modified = true;
                    }
                }
            }

            return modified;
        }
    }
} );

qx.Class.define( 'jsava.util.AbstractMap', {
    extend: jsava.lang.Object,
    implement: jsava.util.Map,

    type: 'abstract',

    /** @protected */
    construct: function () {
    },

    statics: {
        SimpleEntry: qx.Class.define( 'jsava.util.AbstractMap.SimpleEntry', {
            extend: jsava.util.Map.Entry,
            implement: [jsava.io.Serializable],

            construct: function () {
                var args = Array.prototype.slice.call( arguments );
                switch( args.length ) {
                    case 1:
                        this.assertInterface( args[0], jsava.util.Map.Entry );
                        this.__key = args[0].getKey();
                        this.__value = args[0].getValue();
                        break;
                    case 2:
                        this.__key = args[0];
                        this.__value = args[1];
                        break;
                    default:
                        throw new jsava.lang.IllegalArgumentException();
                        break;
                }
            },

            statics: {
                /** @private */
                serialVersionUID: 1
            },

            members: {
                __key: null,
                __value: null,

                __eq: function (obj1, obj2) {
                    return obj1 === null ? obj2 === null : obj1.equals( obj2 );
                },

                getKey: function () {
                    return this.__key;
                },

                getValue: function () {
                    return this.__value;
                },

                setValue: function (value) {
                    var oldValue = this.__value;
                    this.__value = value;
                    return oldValue;
                },

                equals: function (other) {
                    if( other === null || !( qx.Interface.objectImplements( other, jsava.util.Map.Entry ) ) ) {
                        return false;
                    }

                    return this.__eq( this.__key, other.getKey() ) && this.__eq( this.__value, other.getValue() );
                },

                hashCode: function () {
                    return (this.__key === null ? 0 : this.__key.hashCode()) ^
                        (this.__value === null ? 0 : this.__value.hashCode());
                },

                toString: function () {
                    return this.__key + '=' + this.__value;
                }
            }
        } ),

        SimpleImmutableEntry: qx.Class.define( 'jsava.util.AbstractMap.SimpleImmutableEntry', {
            extend: jsava.util.Map.Entry,
            implement: [jsava.io.Serializable],

            construct: function () {
                var args = Array.prototype.slice.call( arguments );
                switch( args.length ) {
                    case 1:
                        this.assertInterface( args[0], jsava.util.Map.Entry );
                        this.__key = args[0].getKey();
                        this.__value = args[0].getValue();
                        break;
                    case 2:
                        this.__key = args[0];
                        this.__value = args[1];
                        break;
                    default:
                        throw new jsava.lang.IllegalArgumentException();
                        break;
                }
            },

            statics: {
                /** @private */
                serialVersionUID: 1
            },

            members: {
                __key: null,
                __value: null,

                __eq: function (obj1, obj2) {
                    return obj1 === null ? obj2 === null : obj1.equals( obj2 );
                },

                getKey: function () {
                    return this.__key;
                },

                getValue: function () {
                    return this.__value;
                },

                setValue: function (value) {
                    throw new jsava.lang.UnsupportedOperationException();
                },

                equals: function (other) {
                    if( other === null || !( qx.Interface.objectImplements( other, jsava.util.Map.Entry ) ) ) {
                        return false;
                    }

                    return this.__eq( this.__key, other.getKey() ) && this.__eq( this.__value, other.getValue() );
                },

                hashCode: function () {
                    return (this.__key === null ? 0 : this.__key.hashCode()) ^
                        (this.__value === null ? 0 : this.__value.hashCode());
                },

                toString: function () {
                    return this.__key + '=' + this.__value;
                }
            }
        } )
    },

    members: {
        /** @implements jsava.util.Set */
        _keySet: null,
        /** @implements jsava.util.Collection */
        _values: null,

        /** @abstract */
        entrySet: function () {
        },

        size: function () {
            return this.entrySet().size();
        },

        isEmpty: function () {
            return this.size() === 0;
        },

        containsValue: function (value) {
            var iterator = this.entrySet().iterator(),
                entry;
            if( value === null ) {
                while( iterator.hasNext() ) {
                    entry = iterator.next();
                    if( entry.getValue() === null ) {
                        return true;
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    entry = iterator.next();
                    if( value.equals( entry.getValue() ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        containsKey: function (key) {
            var iterator = this.entrySet().iterator(),
                entry;
            if( key === null ) {
                while( iterator.hasNext() ) {
                    entry = iterator.next();
                    if( entry.getKey() === null ) {
                        return true;
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    entry = iterator.next();
                    if( key.equals( entry.getKey() ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        get: function (key) {
            var iterator = this.entrySet().iterator(),
                entry;
            if( key === null ) {
                while( iterator.hasNext() ) {
                    entry = iterator.next();
                    if( entry.getKey() === null ) {
                        return entry.getValue();
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    entry = iterator.next();
                    if( key.equals( entry.getKey() ) ) {
                        return entry.getValue();
                    }
                }
            }

            return null;
        },

        put: function (key, value) {
            throw new jsava.lang.UnsupportedOperationException();
        },

        remove: function (key) {
            var iterator = this.entrySet().iterator(),
                correctEntry = null,
                entry;
            if( key === null ) {
                while( correctEntry === null && iterator.hasNext() ) {
                    entry = iterator.next();
                    if( entry.getKey() === null ) {
                        correctEntry = entry;
                    }
                }
            } else {
                while( correctEntry === null && iterator.hasNext() ) {
                    entry = iterator.next();
                    if( key.equals( entry.getKey() ) ) {
                        correctEntry = entry;
                    }
                }
            }

            var oldValue = null;
            if( correctEntry !== null ) {
                oldValue = correctEntry.getValue();
                iterator.remove();
            }

            return oldValue;
        },

        putAll: function (map) {
            var iterator = map.entrySet().iterator();
            while( iterator.hasNext() ) {
                var entry = iterator.next();
                this.put( entry.getKey(), entry.getValue() );
            }
        },

        clear: function () {
            this.entrySet().clear();
        },

        keySet: function () {
            if( this._keySet === null ) {
                var _this = this;

                this._keySet = new (jsava.JsavaUtils.createAnonymousClass( {
                    extend: jsava.util.AbstractSet,

                    construct: function () {
                    },

                    members: {
                        iterator: function () {
                            return new (jsava.JsavaUtils.createAnonymousClass( {
                                extend: jsava.lang.Object,
                                implement: [jsava.util.Iterator],

                                construct: function () {
                                },

                                members: {
                                    __iterator: _this.entrySet().iterator(),

                                    hasNext: function () {
                                        return this.__iterator.hasNext();
                                    },

                                    next: function () {
                                        return this.__iterator.next().getKey();
                                    },

                                    remove: function () {
                                        this.__iterator.remove();
                                    }
                                }
                            } ) );
                        },

                        size: function () {
                            return _this.size();
                        },

                        contains: function (key) {
                            return _this.containsKey( key );
                        }
                    }
                } ) );
            }

            return this._keySet;
        },

        values: function () {
            if( this._values === null ) {
                var _this = this;

                this._values = new (jsava.JsavaUtils.createAnonymousClass( {
                    extend: jsava.util.AbstractCollection,

                    construct: function () {
                    },

                    members: {
                        iterator: function () {
                            return new (jsava.JsavaUtils.createAnonymousClass( {
                                extend: jsava.lang.Object,
                                implement: [jsava.util.Iterator],

                                construct: function () {
                                },

                                members: {
                                    __iterator: _this.entrySet().iterator(),

                                    hasNext: function () {
                                        return this.__iterator.hasNext();
                                    },

                                    next: function () {
                                        return this.__iterator.next().getValue();
                                    },

                                    remove: function () {
                                        this.__iterator.remove();
                                    }
                                }
                            } ) );
                        },

                        size: function () {
                            return _this.size();
                        },

                        contains: function (value) {
                            return _this.containsValue( value );
                        }
                    }
                } ) );
            }

            return this._values;
        },

        equals: function (other) {
            if( other === this ) {
                return true;
            }

            if( other === null ) {
                return false;
            }

            if( !qx.Interface.objectImplements( other, jsava.util.Map ) ) {
                return false;
            }

            if( other.size() !== this.size() ) {
                return false;
            }

            try {
                var iterator = this.entrySet().iterator();
                while( iterator.hasNext() ) {
                    var entry = iterator.next(),
                        key = entry.getKey(),
                        value = entry.getValue();
                    if( value === null ) {
                        if( !(other.get( key ) === null && other.containsKey( key )) ) {
                            return false;
                        }
                    } else {
                        if( !value.equals( other.get( key ) ) ) {
                            return false
                        }
                    }
                }
            } catch( e ) {
                if( qx.Class.isSubClassOf( e.constructor, jsava.lang.ClassCastException )
                    || qx.Class.isSubClassOf( e.constructor, jsava.lang.NullPointerException ) ) {
                    return false;
                }
            }

            return true;
        },

        hashCode: function () {
            var hashCode = 0,
                iterator = this.entrySet().iterator();
            while( iterator.hasNext() ) {
                hashCode += iterator.next().hashCode();
            }

            return hashCode;
        },

        toString: function () {
            var iterator = this.entrySet().iterator();
            if( !iterator.hasNext() ) {
                return '{}';
            }

            // TODO use java.lang.StringBuilder
            var result = '{';
            for( ; ; ) {
                var entry = iterator.next(),
                    key = entry.getKey(),
                    value = entry.getValue();
                result += (key === this) ? '(this Map)' : key;
                result += '=';
                result += (value === this) ? '(this Map)' : value;

                if( !iterator.hasNext() ) {
                    return result += '}';
                }

                result += ', ';
            }
        },

        clone: function () {
            var result = this.base( arguments );
            result._keySet = null;
            result._values = null;
            return result;
        }
    }
} );

qx.Class.define( 'jsava.util.HashMap', {
    extend: jsava.util.AbstractMap,
    implement: [jsava.util.Map, jsava.io.Serializable, jsava.lang.Cloneable],

    construct: function () {
        var args = Array.prototype.slice.call( arguments ),
            initialCapacity = this.self( arguments ).DEFAULT_INITIAL_CAPACITY,
            loadFactor = this.self( arguments ).DEFAULT_LOAD_FACTOR;

        switch( args.length ) {
            case 1:
                if( qx.Class.implementsInterface( args[0], jsava.util.Map ) ) {
                    initialCapacity = Math.max( ((args[0].size() / this.self( arguments ).DEFAULT_LOAD_FACTOR) | 0) + 1,
                        this.self( arguments ).DEFAULT_INITIAL_CAPACITY );
                    loadFactor = this.self( arguments ).DEFAULT_LOAD_FACTOR;
                } else {
                    initialCapacity = args[0];
                }
                break;
            case 2:
                initialCapacity = args[0];
                loadFactor = args[1];
                break;
        }

        if( initialCapacity < 0 ) {
            throw new jsava.lang.IllegalArgumentException( 'Illegal initial capacity: ' + initialCapacity );
        }
        if( initialCapacity > this.self( arguments ).MAXIMUM_CAPACITY ) {
            initialCapacity = this.self( arguments ).MAXIMUM_CAPACITY;
        }
        if( loadFactor <= 0 || isNaN( loadFactor ) ) {
            throw new jsava.lang.IllegalArgumentException( 'Illegal load factor: ' + loadFactor );
        }

        var capacity = 1;
        while( capacity < initialCapacity ) {
            capacity <<= 1;
        }

        this._loadFactor = loadFactor;
        this._threshold = (capacity * loadFactor) | 0;
        this.table = jsava.JsavaUtils.arrayOfGivenSize( capacity, null );
        this.init();
    },

    statics: {
        /** @private */
        serialVersionUID: 1,

        DEFAULT_INITIAL_CAPACITY: 16,
        MAXIMUM_CAPACITY: 1 << 30,
        DEFAULT_LOAD_FACTOR: 0.75,

        /** @protected */
        hash: function (hash) {
            hash ^= (hash >>> 20) ^ (hash >>> 12);
            return hash ^ (hash >>> 7) ^ (hash >>> 4);
        },

        /** @protected */
        indexFor: function (hashCode, length) {
            return hashCode & (length - 1);
        },

        Entry: qx.Class.define( 'jsava.util.HashMap.Entry', {
            extend: jsava.lang.Object,
            implement: [jsava.util.Map.Entry],

            construct: function (hash, key, value, nextEntry) {
                this._value = value;
                this._next = nextEntry;
                this._key = key;
                this._hash = hash;
            },

            members: {
                _key: null,
                _value: null,
                /** @type jsava.util.HashMap.Entry */
                _next: null,
                /** @type Number */
                _hash: 0,

                getKey: function () {
                    return this._key;
                },

                getValue: function () {
                    return this._value;
                },

                setValue: function (newValue) {
                    var oldValue = this._value;
                    this._value = newValue;
                    return oldValue;
                },

                equals: function (obj) {
                    if( obj === null || !qx.Class.implementsInterface( obj, jsava.util.HashMap.Entry ) ) {
                        return false;
                    }

                    /** @type jsava.util.HashMap.Entry */
                    var entry = obj,
                        key1 = this.getKey(),
                        key2 = entry.getKey();
                    if( key1 === key2 || (key1 !== null && key1.equals( key2 )) ) {
                        var value1 = this.getValue(),
                            value2 = entry.getValue();
                        if( value1 === value2 || (value1 !== null && value1.equals( value2 )) ) {
                            return true;
                        }
                    }

                    return false;
                },

                hashCode: function () {
                    return (this._key === null ? 0 : this._key.hashCode()) ^
                        (this._value === null ? 0 : this._value.hashCode());
                },

                toString: function () {
                    return this.getKey() + '=' + this.getValue();
                },

                /**
                 * This method is invoked whenever the value in an entry is
                 * overwritten by an invocation of put(k,v) for a key k that's already
                 * in the HashMap.
                 * @protected
                 */
                recordAccess: function (map) {
                },

                /**
                 * This method is invoked whenever the entry is
                 * removed from the table.
                 * @protected
                 */
                recordRemoval: function (map) {
                }
            }
        } )
    },

    members: {
        /** @type jsava.util.HashMap.Entry[] */
        table: null,
        /** @type Number */
        _size: 0,
        /** @type Number */
        _threshold: 0,
        /** @type Number */
        _loadFactor: 0,
        /** @type Number */
        modCount: 0,
        /** @implements jsava.util.Set */
        __entrySet: null,

        /**
         * Initialization hook for subclasses. This method is called
         * in all constructors and pseudo-constructors (clone, readObject)
         * after HashMap has been initialized but before any entries have
         * been inserted.  (In the absence of this method, readObject would
         * require explicit knowledge of subclasses.)
         * @protected
         */
        init: function () {
        },

        size: function () {
            return this._size;
        },

        isEmpty: function () {
            return this._size === 0;
        },

        get: function (key) {
            if( key === null ) {
                return this.__getForNullKey();
            }

            var hash = this.self( arguments ).hash( key.hashCode() );
            for( var entry = this.table[this.self( arguments ).indexFor( hash, this.table.length )];
                 entry !== null; entry = entry._next ) {
                /** @type jsava.lang.Object */
                var k;
                if( entry._hash === hash && ((k = entry._key) === key || key.equals( k )) ) {
                    return entry._value;
                }
            }

            return null;
        },

        __getForNullKey: function () {
            for( var entry = this.table[0]; entry !== null; entry = entry._next ) {
                if( entry._key === null ) {
                    return entry._value;
                }
            }

            return null;
        },

        containsKey: function (key) {
            return this._getEntry( key ) !== null;
        },

        _getEntry: function (key) {
            var hash = (key === null) ? 0 : this.self( arguments ).hash( key.hashCode() );
            for( var entry = this.table[this.self( arguments ).indexFor( hash, this.table.length )];
                 entry !== null; entry = entry._next ) {
                /** @type jsava.lang.Object */
                var k;
                if( entry._hash === hash
                    && ( ( k = entry._key ) === key || ( key !== null && key.equals( k ) ) ) ) {
                    return entry;
                }
            }

            return null;
        },

        put: function (key, value) {
            if( key === null ) {
                return this.putForNullKey( value );
            }

            var hash = this.self( arguments ).hash( key.hashCode() ),
                i = this.self( arguments ).indexFor( hash, this.table.length );
            for( var entry = this.table[i]; entry !== null; entry = entry._next ) {
                /** @type jsava.lang.Object */
                var k;
                if( entry._hash === hash && ( (k = entry._key) === key || key.equals( k ) ) ) {
                    var oldValue = entry._value;
                    entry._value = value;
                    entry.recordAccess( this );
                    return oldValue;
                }
            }

            this.modCount++;
            this.addEntry( hash, key, value, i );
            return null;
        },

        /** @private */
        putForNullKey: function (value) {
            for( var entry = this.table[0]; entry !== null; entry = entry._next ) {
                if( entry._key === null ) {
                    var oldValue = entry._value;
                    entry._value = value;
                    entry.recordAccess( this );
                    return oldValue;
                }
            }

            this.modCount++;
            this.addEntry( 0, null, value, 0 );
            return null;
        },

        /** @private */
        putForCreate: function (key, value) {
            var hash = (key === null) ? 0 : this.self( arguments ).hash( key.hashCode() ),
                i = this.self( arguments ).indexFor( hash, this.table.length );
            for( var entry = this.table[i]; entry !== null; entry = entry._next ) {
                /** @type jsava.lang.Object */
                var k;
                if( entry._hash === hash
                    && ( (k = entry._key) === key || ( key !== null && key.equals( k ) ) ) ) {
                    entry._value = value;
                    return;
                }
            }

            this.createEntry( hash, key, value, i );
        },

        /** @private */
        putAllForCreate: function (map) {
            var iterator = map.entrySet().iterator();
            while( iterator.hasNext() ) {
                var entry = iterator.next();
                this.putForCreate( entry.getKey(), entry.getValue() );
            }
        },

        /** @protected */
        resize: function (newCapacity) {
            var oldTable = this.table,
                oldCapacity = oldTable.length;
            if( oldCapacity === this.self( arguments ).MAXIMUM_CAPACITY ) {
                this._threshold = Number.MAX_VALUE;
                return;
            }

            var newTable = jsava.JsavaUtils.arrayOfGivenSize( newCapacity, null );
            this.transfer( newTable );
            this.table = newTable;
            this._threshold = (newCapacity * this._loadFactor) | 0;
        },

        /** @protected */
        transfer: function (newTable) {
            var src = this.table,
                newCapacity = newTable.length;
            for( var j = 0; j < src.length; j++ ) {
                var entry = src[j];
                if( entry !== null ) {
                    src[j] = null;
                    do {
                        var next = entry._next,
                            i = this.self( arguments ).indexFor( entry._hash, newCapacity );
                        entry._next = newTable[i];
                        newTable[i] = entry;
                        entry = next;
                    } while( entry !== null );
                }
            }
        },

        putAll: function (map) {
            var numKeysToBeAdded = map.size();
            if( numKeysToBeAdded === 0 ) {
                return;
            }

            if( numKeysToBeAdded > this._threshold ) {
                var targetCapacity = (numKeysToBeAdded / this._loadFactor + 1) | 0;
                if( targetCapacity > this.self( arguments ).MAXIMUM_CAPACITY ) {
                    targetCapacity = this.self( arguments ).MAXIMUM_CAPACITY;
                }

                var newCapacity = this.table.length;
                while( newCapacity < targetCapacity ) {
                    newCapacity <<= 1;
                }
                if( newCapacity > this.table.length ) {
                    this.resize( newCapacity );
                }
            }

            var iterator = map.entrySet().iterator();
            while( iterator.hasNext() ) {
                var entry = iterator.next();
                this.put( entry.getKey(), entry.getValue() );
            }
        },

        remove: function (key) {
            var entry = this.removeEntryForKey( key );
            return entry === null ? null : entry._value;
        },

        /** @protected */
        removeEntryForKey: function (key) {
            var hash = (key === null) ? 0 : this.self( arguments ).hash( key.hashCode() ),
                i = this.self( arguments ).indexFor( hash, this.table.length ),
                prev = this.table[i],
                entry = prev;

            while( entry !== null ) {
                var next = entry._next,
                    /** @type jsava.lang.Object */
                        k;
                if( entry._hash === hash
                    && ( (k = entry._key) === key || ( key !== null && key.equals( k ) ) ) ) {
                    this.modCount++;
                    this._size--;
                    if( prev === entry ) {
                        this.table[i] = next;
                    } else {
                        prev._next = next;
                    }
                    entry.recordRemoval( this );
                    return entry;
                }
                prev = entry;
                entry = next;
            }

            return entry;
        },

        /** @protected */
        removeMapping: function (obj) {
            if( obj === null || !qx.Class.implementsInterface( obj, jsava.util.Map.Entry ) ) {
                return null;
            }

            /** @implements jsava.util.Map.Entry */
            var entry = obj,
                key = entry.getKey(),
                hash = (key === null) ? 0 : this.self( arguments ).hash( key.hashCode() ),
                i = this.self( arguments ).indexFor( hash, this.table.length ),
                prev = this.table[i],
                e = prev;

            while( e !== null ) {
                var next = e._next;
                if( e._hash === hash && e.equals( entry ) ) {
                    this.modCount++;
                    this._size--;
                    if( prev === e ) {
                        this.table[i] = next;
                    } else {
                        prev._next = next;
                    }
                    e.recordRemoval( this );
                    return e;
                }
                prev = e;
                e = next;
            }

            return e;
        },

        clear: function () {
            this.modCount++;
            var table = this.table;
            for( var i = 0; i < table.length; i++ ) {
                table[i] = null;
            }
            this._size = 0;
        },

        containsValue: function (value) {
            if( value === null ) {
                return this.containsNullValue();
            }

            var table = this.table;
            for( var i = 0; i < table.length; i++ ) {
                for( var entry = table[i]; entry !== null; entry = entry._next ) {
                    if( value.equals( entry._value ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        /** @protected */
        containsNullValue: function () {
            var table = this.table;
            for( var i = 0; i < table.length; i++ ) {
                for( var entry = table[i]; entry !== null; entry = entry._next ) {
                    if( entry._value === null ) {
                        return true;
                    }
                }
            }

            return false;
        },

        clone: function () {
            /** @type jsava.util.HashMap */
            var result = null;
            try {
                result = this.base( arguments );
            } catch( e ) {
                if( !qx.Class.isSubClassOf( e.constructor, jsava.lang.CloneNotSupportedException ) ) {
                    throw e;
                }
            }

            result.table = jsava.JsavaUtils.arrayOfGivenSize( this.table.length, null );
            result.__entrySet = null;
            result.modCount = 0;
            result._size = 0;
            result.init();
            result.putAllForCreate( this );

            return result;
        },

        /** @protected */
        addEntry: function (hash, key, value, bucketIndex) {
            var entry = this.table[bucketIndex];
            this.table[bucketIndex] = new (this.self( arguments ).Entry)( hash, key, value, entry );
            if( this._size++ >= this._threshold ) {
                this.resize( 2 * this.table.length );
            }
        },

        /** @protected */
        createEntry: function (hash, key, value, bucketIndex) {
            var entry = this.table[bucketIndex];
            this.table[bucketIndex] = new (this.self( arguments ).Entry)( hash, key, value, entry );
            this._size++;
        },

        keySet: function () {
            var keySet = this._keySet;
            return keySet !== null ? keySet : ( this._keySet = new this.KeySet( this ) );
        },

        values: function () {
            var values = this._values;
            return values !== null ? values : ( this._values = new this.Values( this ) );
        },

        entrySet: function () {
            return this.entrySet0();
        },

        /** @private */
        entrySet0: function () {
            var entrySet = this.__entrySet;
            return entrySet !== null ? entrySet : ( this.__entrySet = new this.EntrySet( this ) );
        },

        /** @private */
        HashIterator: qx.Class.define( 'jsava.util.HashMap.HashIterator', {
            extend: jsava.lang.Object,
            implement: [jsava.util.Iterator],

            type: 'abstract',

            /** @protected */
            construct: function (thisHashMap) {
                this.__thisHashMap = thisHashMap;
                this.expectedModCount = this.__thisHashMap.modCount;
                if( this.__thisHashMap._size > 0 ) {
                    var table = this.__thisHashMap.table;
                    while( this._index < table.length && ( this._next = table[this._index++] ) === null ) {
                        // do nothing
                    }
                }
            },

            members: {
                __thisHashMap: null,

                /** @type jsava.util.HashMap.Entry */
                _next: null,
                /** @type Number */
                expectedModCount: 0,
                /** @type Number */
                _index: 0,
                /** @type jsava.util.HashMap.Entry */
                current: null,

                hasNext: function () {
                    return this._next !== null;
                },

                _nextEntry: function () {
                    if( this.__thisHashMap.modCount !== this.expectedModCount ) {
                        throw new jsava.lang.ConcurrentModificationException();
                    }

                    var entry = this._next;
                    if( entry === null ) {
                        throw new jsava.lang.NoSuchElementException();
                    }

                    if( (this._next = entry._next) === null ) {
                        var table = this.__thisHashMap.table;
                        while( this._index < table.length && ( this._next = table[this._index++] ) === null ) {
                            // do nothing
                        }
                    }

                    this.current = entry;
                    return entry;
                },

                remove: function () {
                    if( this.current === null ) {
                        throw new jsava.lang.IllegalStateException();
                    }

                    if( this.__thisHashMap.modCount !== this.expectedModCount ) {
                        throw new jsava.lang.ConcurrentModificationException();
                    }

                    var key = this.current._key;
                    this.current = null;
                    this.__thisHashMap.removeEntryForKey( key );
                    this.expectedModCount = this.__thisHashMap.modCount;
                }
            }
        } ),

        /** @protected */
        newKeyIterator: function () {
            return new this.KeyIterator( this );
        },

        /** @protected */
        newValueIterator: function () {
            return new this.ValueIterator( this );
        },

        /** @protected */
        newEntryIterator: function () {
            return new this.EntryIterator( this );
        },

        /** @private */
        ValueIterator: qx.Class.define( 'jsava.util.HashMap.ValueIterator', {
            extend: jsava.util.HashMap.HashIterator,

            construct: function (thisHashMap) {
                this.base( arguments, thisHashMap );
            },

            members: {
                next: function () {
                    return this._nextEntry()._value;
                }
            }
        } ),

        /** @private */
        KeyIterator: qx.Class.define( 'jsava.util.HashMap.KeyIterator', {
            extend: jsava.util.HashMap.HashIterator,

            construct: function (thisHashMap) {
                this.base( arguments, thisHashMap );
            },

            members: {
                next: function () {
                    return this._nextEntry().getKey();
                }
            }
        } ),

        /** @private */
        EntryIterator: qx.Class.define( 'jsava.util.HashMap.EntryIterator', {
            extend: jsava.util.HashMap.HashIterator,

            construct: function (thisHashMap) {
                this.base( arguments, thisHashMap );
            },

            members: {
                next: function () {
                    return this._nextEntry();
                }
            }
        } ),

        /** @private */
        KeySet: qx.Class.define( 'jsava.util.HashMap.KeySet', {
            extend: jsava.util.AbstractSet,

            construct: function (thisHashMap) {
                this.base( arguments );
                this.__thisHashMap = thisHashMap;
            },

            members: {
                __thisHashMap: null,

                iterator: function () {
                    return this.__thisHashMap.newKeyIterator();
                },

                size: function () {
                    return this.__thisHashMap._size;
                },

                contains: function (obj) {
                    return this.__thisHashMap.containsKey( obj );
                },

                remove: function (obj) {
                    return this.__thisHashMap.removeEntryForKey( obj ) !== null;
                },

                clear: function () {
                    this.__thisHashMap.clear();
                }
            }
        } ),

        /** @private */
        Values: qx.Class.define( 'jsava.util.HashMap.Values', {
            extend: jsava.util.AbstractCollection,

            construct: function (thisHashMap) {
                this.base( arguments );
                this.__thisHashMap = thisHashMap;
            },

            members: {
                __thisHashMap: null,

                iterator: function () {
                    return this.__thisHashMap.newValueIterator();
                },

                size: function () {
                    return this.__thisHashMap._size;
                },

                contains: function (obj) {
                    return this.__thisHashMap.containsValue( obj );
                },

                clear: function () {
                    this.__thisHashMap.clear();
                }
            }
        } ),

        /** @private */
        EntrySet: qx.Class.define( 'jsava.util.HashMap.EntrySet', {
            extend: jsava.util.AbstractSet,

            construct: function (thisHashMap) {
                this.base( arguments );
                this.__thisHashMap = thisHashMap;
            },

            members: {
                __thisHashMap: null,

                iterator: function () {
                    return this.__thisHashMap.newEntryIterator();
                },

                size: function () {
                    return this.__thisHashMap._size;
                },

                contains: function (obj) {
                    if( obj === null || !qx.Class.implementsInterface( obj, jsava.util.Map.Entry ) ) {
                        return false;
                    }

                    /** @implements jsava.util.Map.Entry */
                    var entry = obj,
                        candidate = this.__thisHashMap._getEntry( entry.getKey() );
                    return candidate !== null && candidate.equals( entry );
                },

                remove: function (obj) {
                    return this.__thisHashMap.removeMapping( obj ) !== null;
                },

                clear: function () {
                    this.__thisHashMap.clear();
                }
            }
        } )
    }
} );

qx.Interface.define( 'jsava.util.List', {
    extend: jsava.util.Collection,

    members: {
        /**
         * @return {Number}
         */
        size: function () {
        },

        /**
         * @return {Boolean}
         */
        isEmpty: function () {
        },

        /**
         * @return {Boolean}
         */
        contains: function (obj) {
        },

        /**
         * @return {jsava.util.Iterator}
         */
        iterator: function () {
        },

        /**
         * @return {jsava.lang.Object[]}
         */
        toArray: function () {
        },

        /**
         * @return {Boolean}
         */
        add: function () {
        },

        /**
         * @param {jsava.lang.Object} obj
         * @return {Boolean}
         */
        remove: function (obj) {
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        containsAll: function (collection) {
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        addAll: function (collection) {
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        removeAll: function (collection) {
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        retainAll: function (collection) {
        },

        clear: function () {
        },

        /**
         * @param {jsava.lang.Object} other
         * @return {Boolean}
         */
        equals: function (other) {
        },

        /**
         * @return {Number}
         */
        hashCode: function () {
        },

        /**
         * @param {Number} index
         */
        get: function (index) {
        },

        /**
         * @param {Number} index
         * @param element
         */
        set: function (index, element) {
        },

        /**
         * @param {jsava.lang.Object} obj
         * @return {Number}
         */
        indexOf: function (obj) {
        },

        /**
         * @param {jsava.lang.Object} obj
         * @return {Number}
         */
        lastIndexOf: function (obj) {
        },

        /**
         * @return {jsava.util.ListIterator}
         */
        listIterator: function () {
        },

        /**
         * @param {Number} fromIndex
         * @param {Number} toIndex
         * @return {jsava.util.List}
         */
        subList: function (fromIndex, toIndex) {
        }
    }
} );

qx.Interface.define( 'jsava.util.ListIterator', {
    extend: jsava.util.Iterator,

    members: {
        /**
         * @return {Boolean}
         */
        hasNext: function () {
        },

        next: function () {
        },

        /**
         * @return {Boolean}
         */
        hasPrevious: function () {
        },

        previous: function () {
        },

        /**
         * @return {Number}
         */
        nextIndex: function () {
        },

        /**
         * @return {Number}
         */
        previousIndex: function () {
        },

        remove: function () {
        },

        set: function (element) {
        },

        add: function (element) {
        }
    }
} );

qx.Class.define( 'jsava.util.AbstractList', {
    extend: jsava.util.AbstractCollection,
    implement: jsava.util.List,

    type: 'abstract',

    /** @protected */
    construct: function () {
    },

    members: {
        /** @protected */
        modCount: 0,

        add: function () {
            if( arguments.length === 1 ) {
                this.add( this.size(), arguments[0] );
                return true;
            }

            // add(index, element) needs to be implemented in the child class
            // add(element) shall either be overridden or call this.base(arguments)
            throw new jsava.lang.UnsupportedOperationException();
        },

        /** @abstract */
        get: function (index) {
        },

        set: function (index, element) {
            throw new jsava.lang.UnsupportedOperationException();
        },

        remove: function (index) {
            throw new jsava.lang.UnsupportedOperationException();
        },

        indexOf: function (obj) {
            var iterator = this.listIterator();
            if( obj === null ) {
                while( iterator.hasNext() ) {
                    if( iterator.next() === null ) {
                        return iterator.previousIndex();
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    if( obj.equals( iterator.next() ) ) {
                        return iterator.previousIndex();
                    }
                }
            }

            return -1;
        },

        lastIndexOf: function (obj) {
            var iterator = this.listIterator( this.size() );
            if( obj === null ) {
                while( iterator.hasPrevious() ) {
                    if( iterator.previous() === null ) {
                        return iterator.previousIndex();
                    }
                }
            } else {
                while( iterator.hasPrevious() ) {
                    if( obj.equals( iterator.previous() ) ) {
                        return iterator.previousIndex();
                    }
                }
            }

            return -1;
        },

        clear: function () {
            this.removeRange( 0, this.size() );
        },

        addAll: function (index, collection) {
            var modified = false,
                iterator = collection.iterator();
            while( iterator.hasNext() ) {
                this.add( index++, iterator.next() );
                modified = true;
            }

            return modified;
        },

        iterator: function () {
            return new this.Itr( this );
        },

        listIterator: function () {
            if( arguments.length === 0 ) {
                return this.listIterator( 0 );
            }

            var index = arguments[0];
            if( index < 0 || index > this.size() ) {
                throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index );
            }

            return new this.ListItr( this, index );
        },

        subList: function (fromIndex, toIndex) {
            return (qx.Interface.objectImplements( this, jsava.util.RandomAccess ) ?
                new jsava.util.RandomAccessSubList( this, fromIndex, toIndex ) :
                new jsava.util.SubList( this, fromIndex, toIndex ))
        },

        equals: function (other) {
            if( other === this ) {
                return true;
            }

            if( other === null ) {
                return false;
            }

            if( !qx.Interface.objectImplements( other, jsava.util.List ) ) {
                return false;
            }

            /** @type jsava.util.List */
            var list = other;

            var iterator1 = this.listIterator(),
                iterator2 = list.listIterator();
            while( iterator1.hasNext() && iterator2.hasNext() ) {
                var element1 = iterator1.next(),
                    object2 = iterator2.next();
                if( !( element1 === null ? object2 === null : element1.equals( object2 ) ) ) {
                    return false;
                }
            }

            return !( iterator1.hasNext() || iterator2.hasNext() );
        },

        hashCode: function () {
            var hashCode = 1,
                iterator = this.iterator();
            while( iterator.hasNext() ) {
                var obj = iterator.next();
                hashCode = 31 * hashCode + (obj === null ? 0 : obj.hashCode());
            }

            return hashCode;
        },

        /**
         * @protected
         * @param {Number} fromIndex
         * @param {Number} toIndex
         */
        removeRange: function (fromIndex, toIndex) {
            var iterator = this.listIterator( fromIndex );
            for( var i = 0, n = toIndex - fromIndex; i < n; i++ ) {
                iterator.next();
                iterator.remove();
            }
        },

        /** @private */
        Itr: qx.Class.define( 'jsava.util.AbstractList.Itr', {
            extend: jsava.lang.Object,
            implement: jsava.util.Iterator,

            /** @private */
            construct: function (thisAbstractList) {
                this.__thisAbstractList = thisAbstractList;
                this.expectedModCount = this.__thisAbstractList.modCount;
            },

            members: {
                /** @type jsava.util.AbstractList */
                __thisAbstractList: null,

                /** @protected */
                cursor: 0,
                /** @protected */
                lastRet: -1,
                /**
                 * @protected
                 * @type Number
                 */
                expectedModCount: 0,

                hasNext: function () {
                    return this.cursor !== this.__thisAbstractList.size();
                },

                next: function () {
                    this.checkForComodification();

                    try {
                        var next = this.__thisAbstractList.get( this.cursor );
                        this.lastRet = this.cursor++;
                        return next;
                    } catch( e ) {
                        if( qx.Class.isSubClassOf( e.constructor, jsava.lang.IndexOutOfBoundsException ) ) {
                            this.checkForComodification();
                            throw new jsava.lang.NoSuchElementException();
                        }

                        throw e;
                    }
                },

                remove: function () {
                    if( this.lastRet === -1 ) {
                        throw new jsava.lang.IllegalStateException();
                    }
                    this.checkForComodification();

                    try {
                        this.__thisAbstractList.remove( this.lastRet );
                        if( this.lastRet < this.cursor ) {
                            this.cursor--;
                        }
                        this.lastRet = -1;
                        this.expectedModCount = this.__thisAbstractList.modCount;
                    } catch( e ) {
                        if( qx.Class.isSubClassOf( e.constructor, jsava.lang.IndexOutOfBoundsException ) ) {
                            throw new jsava.lang.ConcurrentModificationException();
                        }

                        throw e;
                    }
                },

                /** @protected */
                checkForComodification: function () {
                    if( this.__thisAbstractList.modCount !== this.expectedModCount ) {
                        throw new jsava.lang.ConcurrentModificationException();
                    }
                }
            }
        } ),

        /** @private */
        ListItr: qx.Class.define( 'jsava.util.AbstractList.ListItr', {
            extend: jsava.util.AbstractList.Itr,
            implement: jsava.util.ListIterator,

            /** @private */
            construct: function (thisAbstractList, index) {
                this.base( arguments, thisAbstractList );
                this.cursor = index;
            },

            members: {
                hasPrevious: function () {
                    return this.cursor !== 0;
                },

                previous: function () {
                    this.checkForComodification();
                    try {
                        var i = this.cursor - 1,
                            previous = this.__thisAbstractList.get( i );
                        this.lastRet = this.cursor = i;
                        return previous;
                    } catch( e ) {
                        if( qx.Class.isSubClassOf( e.constructor, jsava.lang.IndexOutOfBoundsException ) ) {
                            this.checkForComodification();
                            throw new jsava.lang.NoSuchElementException();
                        }

                        throw e;
                    }
                },

                nextIndex: function () {
                    return this.cursor;
                },

                previousIndex: function () {
                    return this.cursor - 1;
                },

                set: function (element) {
                    if( this.lastRet === 1 ) {
                        throw new jsava.lang.IllegalStateException();
                    }
                    this.checkForComodification();

                    try {
                        this.__thisAbstractList.set( this.lastRet, element );
                        this.expectedModCount = this.__thisAbstractList.modCount;
                    } catch( e ) {
                        if( qx.Class.isSubClassOf( e.constructor, jsava.lang.IndexOutOfBoundsException ) ) {
                            throw new jsava.lang.ConcurrentModificationException();
                        }

                        throw e;
                    }
                },

                add: function (element) {
                    this.checkForComodification();
                    try {
                        this.__thisAbstractList.add( this.cursor++, element );
                        this.lastRet = -1;
                        this.expectedModCount = this.__thisAbstractList.modCount;
                    } catch( e ) {
                        if( qx.Class.isSubClassOf( e.constructor, jsava.lang.IndexOutOfBoundsException ) ) {
                            throw new jsava.lang.ConcurrentModificationException();
                        }

                        throw e;
                    }
                }
            }
        } )
    }
} );

qx.Class.define( 'jsava.util.Arrays', {
    extend: jsava.lang.Object,

    type: 'static',

    statics: {
        // TODO various signatures may be missing
        /**
         * @param {jsava.lang.Object[]} original
         * @param {Number} newLength
         */
        copyOf: function (original, newLength) {
            var copy = jsava.JsavaUtils.arrayOfGivenSize( newLength, null );
            jsava.lang.System.arraycopy( original, 0, copy, 0, Math.min( original.length, newLength ) );

            return copy;
        },

        hashCode: function (source) {
            if( source === null ) {
                return 0;
            }

            var hashCode = 1;
            for( var i = 0; i < source.length; i++ ) {
                hashCode = 31 * hashCode + ( source[i] === null ? 0 : source[i].hashCode() );
            }

            return hashCode;
        }

        // TODO a lot more methods
    }
} );

qx.Class.define( 'jsava.util.SubList', {
    extend: jsava.util.AbstractList,

    /**
     * @protected
     * @param {jsava.util.AbstractList} list
     * @param {Number} fromIndex
     * @param {Number} toIndex
     */
    construct: function (list, fromIndex, toIndex) {
        if( fromIndex < 0 ) {
            throw new jsava.util.IndexOutOfBoundsException( 'fromIndex = ' + fromIndex );
        }
        if( toIndex > list.size() ) {
            throw new jsava.util.IndexOutOfBoundsException( 'toIndex = ' + toIndex );
        }
        if( fromIndex > toIndex ) {
            throw new jsava.util.IllegalArgumentException( 'fromIndex(' + fromIndex + ') > toIndex(' + toIndex + ')' );
        }

        this.l = list;
        this.offset = fromIndex;
        this.__size = toIndex - fromIndex;
        this.expectedModCount = this.l.modCount;
    },

    members: {
        /**
         * @private
         * @implements jsava.util.AbstractList
         */
        l: null,
        /** @private */
        offset: 0,
        /** @private */
        __size: 0,
        /** @private */
        expectedModCount: 0,

        set: function (index, element) {
            this.rangeCheck( index );
            this.checkForComodification();
            return this.l.set( index + this.offset, element );
        },

        get: function (index) {
            this.rangeCheck( index );
            this.checkForComodification();
            return this.l.get( index + this.offset );
        },

        size: function () {
            this.checkForComodification();
            return this.__size;
        },

        add: function (index, element) {
            if( index < 0 || index > this.__size ) {
                throw new jsava.lang.IndexOutOfBoundsException();
            }

            this.checkForComodification();
            this.l.add( index + this.offset, element );
            this.expectedModCount = this.l.modCount;
            this.__size++;
            this.modCount++;
        },

        remove: function (index) {
            this.rangeCheck( index );
            this.checkForComodification();
            var result = this.l.remove( index + this.offset );
            this.expectedModCount = this.l.modCount;
            this.__size--;
            this.modCount++;

            return result;
        },

        removeRange: function (fromIndex, toIndex) {
            this.checkForComodification();
            this.l.removeRange( fromIndex + this.offset, toIndex + this.offset );
            this.expectedModCount = this.l.modCount;
            this.__size -= (toIndex - fromIndex);
            this.modCount++;
        },

        addAll: function () {
            if( arguments.length === 1 ) {
                return this.addAll( this.__size, arguments[0] );
            } else {
                var index = arguments[0],
                    /** @implements jsava.util.Collection */
                        collection = arguments[1];

                if( index < 0 || index > this.__size ) {
                    throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ', Size: ' + this.__size );
                }

                var cSize = collection.size();
                if( cSize === 0 ) {
                    return false;
                }

                this.checkForComodification();
                this.l.addAll( this.offset + index, collection );
                this.expectedModCount = this.l.modCount;
                this.__size += cSize;
                this.modCount++;

                return true;
            }
        },

        iterator: function () {
            return this.listIterator();
        },

        listIterator: function () {
            if( arguments.length === 0 ) {
                return this.base( arguments );
            }

            var index = arguments[0];

            this.checkForComodification();
            if( index < 0 || index > this.__size ) {
                throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ', Size: ' + this.__size );
            }

            return new (jsava.JsavaUtils.createAnonymousClass( {
                extend: jsava.lang.Object,
                implement: jsava.util.ListIterator,

                construct: function (thisSubList) {
                    this.__thisSubList = thisSubList;
                    this.iterator = this.__thisSubList.l.listIterator( index + this.__thisSubList.offset );
                },

                members: {
                    /** @type jsava.util.SubList */
                    __thisSubList: null,
                    /** @implements jsava.util.ListIterator */
                    iterator: null,

                    hasNext: function () {
                        return this.nextIndex() < this.__thisSubList.__size;
                    },

                    next: function () {
                        if( this.hasNext() ) {
                            return this.iterator.next();
                        } else {
                            throw new jsava.lang.NoSuchElementException();
                        }
                    },

                    hasPrevious: function () {
                        return this.previousIndex() >= 0;
                    },

                    previous: function () {
                        if( this.hasPrevious() ) {
                            return this.iterator.previous();
                        } else {
                            throw new jsava.lang.NoSuchElementException();
                        }
                    },

                    nextIndex: function () {
                        return this.iterator.nextIndex() - this.__thisSubList.offset;
                    },

                    previousIndex: function () {
                        return this.iterator.previousIndex() - this.__thisSubList.offset;
                    },

                    remove: function () {
                        this.iterator.remove();
                        this.__thisSubList.expectedModCount = this.__thisSubList.l.modCount;
                    },

                    set: function (element) {
                        this.iterator.set( element );
                    },

                    add: function (element) {
                        this.iterator.add( element );
                        this.__thisSubList.expectedModCount = this.__thisSubList.l.modCount;
                        this.__thisSubList.__size++;
                        this.__thisSubList.modCount++;
                    }
                }
            } ))( this );
        },

        subList: function (fromIndex, toIndex) {
            return new this.SubList( this, fromIndex, toIndex );
        },

        /** @private */
        rangeCheck: function (index) {
            if( index < 0 || index >= this.__size ) {
                throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ',Size: ' + this.__size );
            }
        },

        /** @private */
        checkForComodification: function () {
            if( this.l.modCount !== this.expectedModCount ) {
                throw new jsava.lang.ConcurrentModificationException();
            }
        }
    }
} );

qx.Interface.define( 'jsava.util.RandomAccess', {
} );

qx.Class.define( 'jsava.util.RandomAccessSubList', {
    extend: jsava.util.SubList,
    implement: jsava.util.RandomAccess,

    /**
     * @protected
     * @param {jsava.util.AbstractList} list
     * @param {Number} fromIndex
     * @param {Number} toIndex
     */
    construct: function (list, fromIndex, toIndex) {
        this.base( arguments, list, fromIndex, toIndex );
    },

    members: {
        subList: function (fromIndex, toIndex) {
            return new jsava.util.RandomAccessSubList( this, fromIndex, toIndex );
        }
    }
} );

qx.Class.define( 'jsava.util.ArrayList', {
    extend: jsava.util.AbstractList,
    implement: [jsava.util.List, jsava.util.RandomAccess, jsava.lang.Cloneable, jsava.io.Serializable],

    construct: function () {
        var args = Array.prototype.slice.call( arguments );
        if( args.length === 0 ) {
            args = [10];
        }

        if( qx.Class.implementsInterface( args[0], jsava.util.Collection ) ) {
            /** @type jsava.util.Collection */
            var collection = args[0];

            this.elementData = collection.toArray();
            this.__size = this.elementData.length;
        } else {
            var initialCapacity = args[0];

            this.base( arguments );
            if( initialCapacity < 10 ) {
                throw new jsava.lang.IllegalArgumentException( 'Illegal Capacity: ' + initialCapacity );
            }

            this.elementData = jsava.JsavaUtils.arrayOfGivenSize( initialCapacity, null );
        }
    },

    statics: {
        /** @private */
        serialVersionUID: 1
    },

    members: {
        /**
         * @private
         * @type {jsava.lang.Object[]}
         */
        elementData: null,

        /** @private */
        __size: 0,

        trimtoSize: function () {
            this.modCount++;
            var oldCapacity = this.elementData.length;
            if( this.__size < oldCapacity ) {
                this.elementData = jsava.util.Arrays.copyOf( this.elementData, this.__size );
            }
        },

        /**
         * @param {Number} minCapacity
         */
        ensureCapacity: function (minCapacity) {
            this.modCount++;
            var oldCapacity = this.elementData.length;
            if( minCapacity > oldCapacity ) {
                var newCapacity = (oldCapacity * 3) / 2 + 1;
                if( newCapacity < minCapacity ) {
                    newCapacity = minCapacity;
                }

                this.elementData = jsava.util.Arrays.copyOf( this.elementData, newCapacity );
            }
        },

        size: function () {
            return this.__size;
        },

        isEmpty: function () {
            return this.__size === 0;
        },

        contains: function (obj) {
            return this.indexOf( obj ) >= 0;
        },

        indexOf: function (obj) {
            var i;

            if( obj === null ) {
                for( i = 0; i < this.__size; i++ ) {
                    if( this.elementData[i] === null ) {
                        return i;
                    }
                }
            } else {
                for( i = 0; i < this.__size; i++ ) {
                    if( obj.equals( this.elementData[i] ) ) {
                        return i;
                    }
                }
            }

            return -1;
        },

        lastIndexOf: function (obj) {
            var i;

            if( obj === null ) {
                for( i = this.__size - 1; i >= 0; i-- ) {
                    if( this.elementData[i] === null ) {
                        return i;
                    }
                }
            } else {
                for( i = this.__size - 1; i >= 0; i-- ) {
                    if( obj.equals( this.elementData[i] ) ) {
                        return i;
                    }
                }
            }

            return -1;
        },

        clone: function () {
            try {
                /** @type jsava.util.ArrayList */
                var v = this.base( arguments );
                v.elementData = jsava.util.Arrays.copyOf( this.elementData, this.__size );
                v.modCount = 0;
                return v;
            } catch( e ) {
                if( qx.Class.isSubClassOf( e.constructor, jsava.lang.CloneNotSupportedException ) ) {
                    // TODO throw InternalError.InternalError
                    throw new jsava.lang.Exception();
                }

                throw e;
            }
        },

        toArray: function () {
            return jsava.util.Arrays.copyOf( this.elementData, this.__size );
        },

        get: function (index) {
            this.RangeCheck( index );
            return this.elementData[index];
        },

        set: function (index, element) {
            this.RangeCheck( index );

            var oldValue = this.elementData[index];
            this.elementData[index] = element;
            return oldValue;
        },

        /** @returns {*} */
        add: function () {
            var args = Array.prototype.slice.call( arguments ),
                element;
            switch( args.length ) {
                case 1:
                    element = args[0];

                    this.ensureCapacity( this.__size + 1 );
                    this.elementData[this.__size++] = element;
                    return true;
                case 2:
                    var index = args[0];
                    element = args[1];

                    if( index > this.__size || index < 0 ) {
                        throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ', Size: ' + this.__size );
                    }

                    this.ensureCapacity( this.__size + 1 );
                    jsava.lang.System.arraycopy( this.elementData, index, this.elementData, index + 1,
                        this.__size - index );
                    this.elementData[index] = element;
                    this.__size++;
                    break;
            }
        },

        remove: function () {
            var args = Array.prototype.slice.call( arguments ),
                index;

            if( args[0] === null || qx.Class.isSubClassOf( args[0].constructor, jsava.lang.Object ) ) {
                var obj = args[0];

                if( obj === null ) {
                    for( index = 0; index < this.__size; index++ ) {
                        if( this.elementData[index] === null ) {
                            this.fastRemove( index );
                            return true;
                        }
                    }
                } else {
                    for( index = 0; index < this.__size; index++ ) {
                        if( obj.equals( this.elementData[index] ) ) {
                            this.fastRemove( index );
                            return true;
                        }
                    }
                }

                return false;
            } else {
                index = args[0];

                this.RangeCheck( index );
                this.modCount++;
                var oldValue = this.elementData[index];

                var numMoved = this.__size - index - 1;
                if( numMoved > 0 ) {
                    jsava.lang.System.arraycopy( this.elementData, index + 1, this.elementData, index, numMoved );
                }
                this.elementData[--this.__size] = null;

                return oldValue;
            }
        },

        /** @private */
        fastRemove: function (index) {
            this.modCount++;
            var numMoved = this.__size - index - 1;
            if( numMoved > 0 ) {
                jsava.lang.System.arraycopy( this.elementData, index + 1, this.elementData, index, numMoved );
            }
            this.elementData[--this.__size] = null;
        },

        clear: function () {
            this.modCount++;

            for( var i = 0; i < this.__size; i++ ) {
                this.elementData[i] = null;
            }

            this.__size = 0;
        },

        addAll: function () {
            var args = Array.prototype.slice.call( arguments ),
                numNew, a;
            /** @type jsava.util.Collection */
            var collection;

            switch( args.length ) {
                case 1:
                    /** @type jsava.util.Collection */
                    collection = args[0];

                    a = collection.toArray();
                    numNew = a.length;
                    this.ensureCapacity( this.__size + numNew );
                    jsava.lang.System.arraycopy( a, 0, this.elementData, this.__size, numNew );
                    this.__size += numNew;

                    return numNew !== 0;
                case 2:
                    var index = args[0];
                    collection = args[1];

                    if( index > this.__size || index < 0 ) {
                        throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ', Size: ' + this.__size );
                    }

                    a = collection.toArray();
                    numNew = a.length;
                    this.ensureCapacity( this.__size + numNew );

                    var numMoved = this.__size - index;
                    if( numMoved > 0 ) {
                        jsava.lang.System.arraycopy( this.elementData, index, this.elementData, index + numNew,
                            numMoved );
                    }
                    jsava.lang.System.arraycopy( a, 0, this.elementData, index, numNew );
                    this.__size += numNew;

                    return numNew !== 0;
            }
        },

        removeRange: function (fromIndex, toIndex) {
            this.modCount++;
            var numMoved = this.__size - toIndex;
            jsava.lang.System.arraycopy( this.elementData, toIndex, this.elementData, fromIndex, numMoved );

            var newSize = this.__size - (toIndex - fromIndex);
            while( this.__size !== newSize ) {
                this.elementData[--this.__size] = null;
            }
        },

        /** @private */
        RangeCheck: function (index) {
            if( index >= this.__size ) {
                throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ', Size: ' + this.__size );
            }
        },

        /** @private */
        writeObject: function () {
            throw new jsava.lang.UnsupportedOperationException();
        },

        /** @private */
        readObject: function () {
            throw new jsava.lang.UnsupportedOperationException();
        }
    }
} );

(function (window) {
    'use strict';

    if( typeof window === 'undefined' ) {
        return;
    }

    // DO NOT EDIT -- will be replaced in compile.pl
    var compileOrder = ['jsava.io.Serializable','jsava.lang.Object','jsava.lang.Throwable','jsava.lang.Exception','jsava.lang.RuntimeException','jsava.lang.IndexOutOfBoundsException','jsava.lang.IllegalArgumentException','jsava.lang.CloneNotSupportedException','jsava.lang.NullPointerException','jsava.lang.Cloneable','jsava.lang.System','jsava.lang.ClassCastException','jsava.lang.IllegalStateException','jsava.lang.Iterable','jsava.lang.UnsupportedOperationException','jsava.lang.NoSuchElementException','jsava.lang.ConcurrentModificationException','jsava.JsavaUtils','jsava.util.Collection','jsava.util.Set','jsava.util.Map','jsava.util.Iterator','jsava.util.AbstractCollection','jsava.util.AbstractSet','jsava.util.AbstractMap','jsava.util.HashMap','jsava.util.List','jsava.util.ListIterator','jsava.util.AbstractList','jsava.util.Arrays','jsava.util.SubList','jsava.util.RandomAccess','jsava.util.RandomAccessSubList','jsava.util.ArrayList'];

    var Cache = new (function () {
        var __cache = {};

        this.Status = {
            CHECKED: 0,
            SHORTENED: 1
        };

        this.setStatus = function (clazz, status) {
            __cache[clazz] = status;
        };
    });

    var getShortName = function (clazz) {
        return clazz.split( /\./ ).pop();
    };

    var getClass = function (clazz) {
        var __clazz = window,
            parts = clazz.split( /\./ );
        for( var i = 0; i < parts.length; i++ ) {
            __clazz = __clazz[parts[i]];
        }

        return __clazz;
    };

    for( var i = 0; i < compileOrder.length; i++ ) {
        var clazz = getShortName( compileOrder[i] );

        if( typeof window[clazz] === 'undefined' ) {
            window[clazz] = getClass( compileOrder[i] );
            Cache.setStatus( clazz, Cache.Status.SHORTENED );
        } else {
            Cache.setStatus( clazz, Cache.Status.CHECKED );
        }
    }
})( window );
