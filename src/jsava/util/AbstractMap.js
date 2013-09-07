qx.Class.define( 'jsava.util.AbstractMap', {
    extend: jsava.lang.Object,
    implement: jsava.util.Map,

    type: 'abstract',

    /** @protected */
    construct: function () {
        this.super( arguments );
    },

    statics: {
        SimpleEntry: qx.Class.define( 'jsava.util.AbstractMap.SimpleEntry', {
            extend: jsava.lang.Object,
            implement: [jsava.util.Map.Entry, jsava.io.Serializable],

            construct: function () {
                this.super( arguments );

                var args = Array.prototype.slice.call( arguments );
                switch( args.length ) {
                    case 1:
                        /** @type jsava.util.Map.Entry */
                        var entry = args[0];

                        this.key = entry.getKey();
                        this.value = entry.getValue();
                        break;
                    case 2:
                        this.key = args[0];
                        this.value = args[1];
                        break;
                    default:
                        throw new jsava.lang.IllegalArgumentException();
                        break;
                }
            },

            statics: {
                /** @private */
                serialVersionUID: -8499721149061103
            },

            members: {
                key: null,
                value: null,

                __eq: function (obj1, obj2) {
                    return obj1 === null ? obj2 === null : obj1.equals( obj2 );
                },

                getKey: function () {
                    return this.key;
                },

                getValue: function () {
                    return this.value;
                },

                setValue: function (value) {
                    var oldValue = this.value;
                    this.value = value;
                    return oldValue;
                },

                equals: function (other) {
                    if( other === null || !( qx.Class.hasInterface( other.constructor, jsava.util.Map.Entry ) ) ) {
                        return false;
                    }

                    return this.__eq( this.key, other.getKey() ) && this.__eq( this.value, other.getValue() );
                },

                hashCode: function () {
                    return (this.key === null ? 0 : this.key.hashCode()) ^
                        (this.value === null ? 0 : this.value.hashCode());
                },

                toString: function () {
                    return this.key + '=' + this.value;
                }
            }
        } ),

        SimpleImmutableEntry: qx.Class.define( 'jsava.util.AbstractMap.SimpleImmutableEntry', {
            extend: jsava.lang.Object,
            implement: [jsava.util.Map.Entry, jsava.io.Serializable],

            construct: function () {
                this.super( arguments );

                var args = Array.prototype.slice.call( arguments );
                switch( args.length ) {
                    case 1:
                        /** @type jsava.util.Map.Entry */
                        var entry = args[0];

                        this.key = entry.getKey();
                        this.value = entry.getValue();
                        break;
                    case 2:
                        this.key = args[0];
                        this.value = args[1];
                        break;
                    default:
                        throw new jsava.lang.IllegalArgumentException();
                        break;
                }
            },

            statics: {
                /** @private */
                serialVersionUID: 7138329143949025
            },

            members: {
                key: null,
                value: null,

                __eq: function (obj1, obj2) {
                    return obj1 === null ? obj2 === null : obj1.equals( obj2 );
                },

                getKey: function () {
                    return this.key;
                },

                getValue: function () {
                    return this.value;
                },

                setValue: function (value) {
                    throw new jsava.lang.UnsupportedOperationException();
                },

                equals: function (other) {
                    if( other === null || !( qx.Class.hasInterface( other.constructor, jsava.util.Map.Entry ) ) ) {
                        return false;
                    }

                    return this.__eq( this.key, other.getKey() ) && this.__eq( this.value, other.getValue() );
                },

                hashCode: function () {
                    return (this.key === null ? 0 : this.key.hashCode()) ^
                        (this.value === null ? 0 : this.value.hashCode());
                },

                toString: function () {
                    return this.key + '=' + this.value;
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

                this._keySet = new (jsava.Utils.createAnonymousClass( {
                    extend: jsava.util.AbstractSet,

                    members: {
                        iterator: function () {
                            return new (jsava.Utils.createAnonymousClass( {
                                extend: jsava.lang.Object,
                                implement: [jsava.util.Iterator],

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
                var thisAbstractMap = this;

                this._values = new (jsava.Utils.createAnonymousClass( {
                    extend: jsava.util.AbstractCollection,

                    members: {
                        iterator: function () {
                            return new (jsava.Utils.createAnonymousClass( {
                                extend: jsava.lang.Object,
                                implement: [jsava.util.Iterator],

                                members: {
                                    __iterator: thisAbstractMap.entrySet().iterator(),

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
                            return thisAbstractMap.size();
                        },

                        contains: function (value) {
                            return thisAbstractMap.containsValue( value );
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

            if( !qx.Class.hasInterface( other.constructor, jsava.util.Map ) ) {
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
            var result = this.super( arguments );
            result._keySet = null;
            result._values = null;
            return result;
        }
    }
} );