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
                    if( !( qx.Interface.classImplements( other, jsava.util.Map.Entry ) ) ) {
                        return false;
                    }

                    return __eq( this.__key, other.getKey() ) && eq( this.__value, other.getValue() );
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
                    if( !( qx.Class.implementsInterface( other, jsava.util.Map.Entry ) ) ) {
                        return false;
                    }

                    return __eq( this.__key, other.getKey() ) && eq( this.__value, other.getValue() );
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
            var iterator = this.entrySet().iterator();
            if( value === null ) {
                while( iterator.hasNext() ) {
                    var entry = iterator.next();
                    if( entry.getValue() === null ) {
                        return true;
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    var entry = iterator.next();
                    if( value.equals( entry.getValue() ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        containsKey: function (key) {
            var iterator = this.entrySet().iterator();
            if( key === null ) {
                while( iterator.hasNext() ) {
                    var entry = iterator.next();
                    if( entry.getKey() === null ) {
                        return true;
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    var entry = iterator.next();
                    if( key.equals( entry.getKey() ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        get: function (key) {
            var iterator = this.entrySet().iterator();
            if( key === null ) {
                while( iterator.hasNext() ) {
                    var entry = iterator.next();
                    if( entry.getKey() === null ) {
                        return entry.getValue();
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    var entry = iterator.next();
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
                correctEntry = null;
            if( key === null ) {
                while( correctEntry === null && iterator.hasNext() ) {
                    var entry = iterator.next();
                    if( entry.getKey() === null ) {
                        correctEntry = entry;
                    }
                }
            } else {
                while( correctEntry === null && iterator.hasNext() ) {
                    var entry = iterator.next();
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

            if( !other.hasInterface( jsava.util.Map ) ) {
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

        _clone: function () {
            var result = this.base( arguments );
            result._keySet = null;
            result._values = null;
            return result;
        }
    }
} );