defineClass( 'jsava.util.RandomAccessSubList', {
    extend: jsava.util.SubList,
    implement: jsava.util.RandomAccess,

    /**
     * @protected
     * @param {jsava.util.AbstractList} list
     * @param {Number} fromIndex
     * @param {Number} toIndex
     */
    construct: function (list, fromIndex, toIndex) {
        this.super( arguments, list, fromIndex, toIndex );
    },

    members: {
        subList: function (fromIndex, toIndex) {
            return new jsava.util.RandomAccessSubList( this, fromIndex, toIndex );
        }
    }
} );