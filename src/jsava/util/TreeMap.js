qx.Class.define( 'jsava.util.TreeMap', {
    extend: jsava.util.AbstractMap,
    implement: [jsava.io.Serializable],

    construct: function () {
    },

    statics: {
        /** @private */
        serialVersionUID: 1,
        Entry: qx.Class.define( 'jsava.util.TreeMap.Entry', {
            extend: jsava.lang.Object,
            implement: [jsava.util.Map.Entry],

            construct: function (key, value, parent) {
                this.key = key;
                this.value = value;
                this.parent = parent;
            },

            members: {
                key: null,
                value: null,
                left: null,
                right: null,
                parent: null,
                color: 'black'
            }
        } )
    },

    members: {
        root: null,
        _size: 0,
        modCount: 0,
        comparator: undefined,

        put: function (key, value) {
            var t = this.root;
            if( t === null ) {
                this.root = new jsava.util.TreeMap.Entry( key, value, null );
                this._size = 1;
                this.modCount++;
                return null;
            }
            var cmp;
            var parent;
            var cpr = this.comparator;
            if( cpr != null ) {
                do {
                    parent = t;
                    cmp = cpr.compare( key, t.key );
                    if( cmp < 0 )
                        t = t.left;
                    else if( cmp > 0 )
                        t = t.right;
                    else
                        return t.setValue( value );
                } while( t != null );
            } else {
                if( key == null )
                    throw new NullPointerException();
                var k = key;
                do {
                    parent = t;
                    cmp = k.compareTo( t.key );
                    if( cmp < 0 )
                        t = t.left;
                    else if( cmp > 0 )
                        t = t.right;
                    else
                        return t.setValue( value );
                } while( t != null );
            }
            var e = new jsava.util.TreeMap.Entry( key, value, parent );
            if( cmp < 0 )
                parent.left = e;
            else
                parent.right = e;
            this.fixAfterInsertion( e );
            this._size++;
            this.modCount++;
            return null;
        },
        size: undefined,
        isEmpty: undefined
    }
} );