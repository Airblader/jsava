// TODO move constants somewhere else
RED = 1;
BLACK = 0;

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
                color: BLACK
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
        isEmpty: undefined,

        fixAfterInsertion: function (x) {
            x.color = RED;

            while( x != null && x != this.root && x.parent.color == RED ) {
                if( this.parentOf( x ) == this.leftOf( this.parentOf( this.parentOf( x ) ) ) ) {
                    var y = this.rightOf( this.parentOf( this.parentOf( x ) ) );
                    if( this.colorOf( y ) == RED ) {
                        this.setColor( this.parentOf( x ), BLACK );
                        this.setColor( y, BLACK );
                        this.setColor( this.parentOf( this.parentOf( x ) ), RED );
                        x = this.parentOf( this.parentOf( x ) );
                    } else {
                        if( x == this.rightOf( this.parentOf( x ) ) ) {
                            x = this.parentOf( x );
                            this.rotateLeft( x );
                        }
                        this.setColor( this.parentOf( x ), BLACK );
                        this.setColor( this.parentOf( this.parentOf( x ) ), RED );
                        this.rotateRight( this.parentOf( this.parentOf( x ) ) );
                    }
                } else {
                    var y = this.leftOf( this.parentOf( this.parentOf( x ) ) );
                    if( this.colorOf( y ) == RED ) {
                        this.setColor( this.parentOf( x ), BLACK );
                        this.setColor( y, BLACK );
                        this.setColor( this.parentOf( this.parentOf( x ) ), RED );
                        x = this.parentOf( this.parentOf( x ) );
                    } else {
                        if( x == this.leftOf( this.parentOf( x ) ) ) {
                            x = this.parentOf( x );
                            this.rotateRight( x );
                        }
                        this.setColor( this.parentOf( x ), BLACK );
                        this.setColor( this.parentOf( this.parentOf( x ) ), RED );
                        this.rotateLeft( this.parentOf( this.parentOf( x ) ) );
                    }
                }
            }
            this.root.color = BLACK;
        },
        colorOf: function (p) {
            return (p == null ? BLACK : p.color);
        },
        parentOf: function (p) {
            return (p == null ? null : p.parent);
        },
        setColor: function (p, c) {
            if( p != null )
                p.color = c;
        },
        leftOf: function (p) {
            return (p == null) ? null : p.left;
        },
        rightOf: function (p) {
            return (p == null) ? null : p.right;
        },
        rotateLeft: function (p) {
            if( p != null ) {
                var r = p.right;
                p.right = r.left;
                if( r.left != null )
                    r.left.parent = p;
                r.parent = p.parent;
                if( p.parent == null )
                    this.root = r;
                else if( p.parent.left == p )
                    p.parent.left = r;
                else
                    p.parent.right = r;
                r.left = p;
                p.parent = r;
            }
        },
        rotateRight: function (p) {
            if( p != null ) {
                console.log( p == this.root );
                var l = p.left;
                p.left = l.right;
                if( l.right != null ) l.right.parent = p;
                l.parent = p.parent;
                if( p.parent == null )
                    this.root = l;
                else if( p.parent.right == p )
                    p.parent.right = l;
                else
                    p.parent.left = l;
                l.right = p;
                p.parent = l;
            }
        }
    }
} );