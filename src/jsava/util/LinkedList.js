qx.Class.define('jsava.util.LinkedList', {
    extend: jsava.lang.Object,
    implements: [],

    construct: function () {
        this.header = new jsava.util.LinkedList.Entry(null, null, null);
        this.header.next = this.header;
        this.header.previous = this.header;
    },

    statics: {
        /** @private */
        serialVersionUID: 1,

        Entry: qx.Class.define('jsava.util.LinkedList.Entry', {
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
        })
    },

    members: {
        /**
         * @private
         * @type {jsava.lang.Object[]}
         */
        header: null,
        _size: 0,

        add: function (e) {
            this.addBefore(e, this.header);
        },

        addBefore: function (e, entry) {
            var newEntry = new jsava.util.LinkedList.Entry(e, entry, entry.previous);
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
            if (typeof arg === 'undefined') {
                this.removeFirst();
            } else if (typeof arg == 'number') {
                this.remove(this.entry(arg));
            } else if (arg.getClassName() == 'jsava.util.LinkedList.Entry') {
                var e = arg;
                if (e == this.header)
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
            this.remove(this.header.next);
        },
        removeLast: function () {
            this.remove(this.header.previous);
        },
        entry: function (index) {
            if (index < 0 || index >= this._size)
                throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + this._size);
            var e = this.header;
            if (index < (this._size >> 1)) {
                for (var i = 0; i <= index; i++)
                    e = e.next;
            } else {
                for (var i = this._size; i > index; i--)
                    e = e.previous;
            }
            return e;
        },


        // For debugging purposes
        asArray: function () {
            var array = new Array();
            var curr = this.header.next;
            while (curr != this.header) {
                array.push(curr.element);
                curr = curr.next;
            }
            return array;
        },
        addAll: function (list) {
            var self = this;
            list.forEach(function (x) {
                self.add(x);
            });
        }
    }
});