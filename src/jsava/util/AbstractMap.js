qx.Class.define( 'jsava.util.AbstractMap', {
    extend: jsava.lang.Object,
    implement: jsava.util.Map,

    // TODO not abstract to allow inline instanciation – there could be a better way for this
    //type: 'abstract',

    /** @protected */
    construct: function () {
    },

    members: {
        /** @type jsava.util.Set */
        _keySet: null,
        /** @type jsava.util.Collection */
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
                                extend: jsava.util.Object(),
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
                // TODO : catch explicitly named exceptions
                return false;
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