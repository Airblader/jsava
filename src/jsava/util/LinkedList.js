qx.Class.define( 'jsava.util.LinkedList', {
    extend: jsava.util.AbstractList,
    implement: jsava.util.List,

    construct: function () {
        this.header = new jsava.util.LinkedList.Entry( null, null, null );
        this.header.next = this.header;
        this.header.previous = this.header;
        var args = Array.prototype.slice.call( arguments );
        if( args.length !== 0 &&
            qx.Class.implementsInterface( args[0], jsava.util.Collection ) ) {
            this.addAll( arg )
        }
    },

    statics: {
        /** @private */
        serialVersionUID: 1,

        Entry: qx.Class.define( 'jsava.util.LinkedList.Entry', {
            extend: jsava.lang.Object,
            construct: function (element, next, previous) {
                this.element = element;
                this.next = next;
                this.previous = previous;
            },
            members: {
                element: null,
                next: null,
                previous: null,
                getElement: function () {
                    return this.element;
                }
            }
        } )
    },

    members: {
        /**
         * @private
         * @type {jsava.lang.Object[]}
         */
        header: null,
        _size: 0,

        add: function () {
            if( arguments.length === 1 ) {
                this.addBefore( arguments[0], this.header );
            } else {
                var e = arguments[1];
                var index = arguments[0];
                this.addBefore( e, (index == this._size ? this.header : this.entry( index ) ) );
            }
        },
        addBefore: function (e, entry) {
            var newEntry = new jsava.util.LinkedList.Entry( e, entry, entry.previous );
            newEntry.previous.next = newEntry;
            newEntry.next.previous = newEntry;
            this._size++;
            // modCount++;
            return newEntry;
        },
        size: function () {
            return this._size;
        },
        getFirst: function () {
            return this.header.next.element;
        },
        getLast: function () {
            return this.header.previous.element;
        },
        remove: function (arg) {
            if( typeof arg === 'undefined' ) {
                this.removeFirst();
            } else if( typeof arg == 'number' ) {
                this.remove( this.entry( arg ) );
            } else if( arg.getClassName() == 'jsava.util.LinkedList.Entry' ) {
                var e = arg;
                if( e == this.header )
                    throw new jsava.lang.NoSuchElementException();
                var result = e.element;
                e.previous.next = e.next;
                e.next.previous = e.previous;
                e.next = e.previous = null;
                e.element = null;
                this._size--;
                //this.modCount++;
                return result;
            } else {
                throw new jsava.lang.IllegalArgumentException();
            }
        },
        removeFirst: function () {
            this.remove( this.header.next );
        },
        push: function (e) {
            this.addFirst( e );
        },
        pop: function () {
            return this.removeFirst();
        },
        removeLast: function () {
            this.remove( this.header.previous );
        },
        entry: function (index) {
            if( index < 0 || index >= this._size )
                throw new jsava.lang.IndexOutOfBoundsException( "Index: " + index + ", Size: " + this._size );
            var e = this.header;
            if( index < (this._size >> 1) ) {
                for( var i = 0; i <= index; i++ )
                    e = e.next;
            } else {
                for( var i = this._size; i > index; i-- )
                    e = e.previous;
            }
            return e;
        },
        get: function (index) {
            return this.entry( index ).element;
        },
        toArray: function () {
            var result = new Array();
            var i = 0;
            for( var e = this.header.next; e != this.header; e = e.next )
                result[i++] = e.element;
            return result;
        },
        addAll: function () {
            if( arguments.length == 2 ) {
                this.base( arguments, arguments[0], arguments[1] );
            } else {
                this.base( arguments, this.size(), arguments[0] );
            }
        }
    }
} );