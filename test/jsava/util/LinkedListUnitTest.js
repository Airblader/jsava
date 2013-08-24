describe( 'LinkedList', function () {
    var LinkedList = jsava.util.LinkedList,
        list;

    function addAll (args) {
        for( var i = 0; i < args.length; i++ ) {
            list.add( args[i] );
        }
    }

    beforeEach( function () {
        list = new LinkedList();
    } );

    it( 'has the correct class name', function () {
        expect( list.getClassName() ).toBe( 'jsava.util.LinkedList' );
    } );

    it( 'has size 0', function () {
        expect( list.size() ).toBe( 0 );
        list.add( 3 );
        list.add( 4 );
        expect( list.size() ).toBe( 2 )
    } );

    it( 'has add works', function () {
        list.add( 3 );
        list.add( 4 );
        list.add( 5 );
        expect( list.getFirst() ).toBe( 3 );
        expect( list.getLast() ).toBe( 5 );
        expect( list.toArray() ).toEqual( [3, 4, 5] )
    } );

    it( 'has entries', function () {
        addAll( [ 0, 1, 2, 3, 4, 5, 6, 7] );
        expect( list.size() ).toBe( 8 );
        expect( list.entry( 2 ).element ).toBe( 2 );
        expect( list.entry( 6 ).element ).toBe( 6 );
    } );
    it( 'has removing', function () {
        var l = [0, undefined, 10, 2, 3, 4, 5, 6];
        addAll( l );
        list.remove( 1 );
        expect( list.size() ).toBe( l.length - 1 );
        list.remove( 4 );
        expect( list.toArray() ).toEqual( [0, 10, 2, 3, 5, 6] );
        expect( list.size() ).toBe( l.length - 2 );
        list.remove();
        expect( list.toArray() ).toEqual( [10, 2, 3, 5, 6] );
    } );
    it( 'supports indices', function () {
        addAll( [1, 2, 3, 4, 5, 6, 7] );
        expect( list.indexOf( 4 ) ).toBe( 3 );
    } );

    describe( 'iteration', function () {
        it( 'works', function () {
            list.add( 10 );
            list.add( 20 );
            list.add( 30 );
            var iter = list.iterator();
            expect( iter.next() ).toBe( 10 );
            expect( iter.next() ).toBe( 20 );
            expect( iter.next() ).toBe( 30 );
            expect( iter.hasNext() ).toBe( false );
        } );
    } )

    it( 'addAll works', function () {
        var otherList = new jsava.util.ArrayList();
        otherList.add( 10 );
        otherList.add( 20 );
        list.addAll( 0, otherList );
        expect( list.toArray() ).toEqual( [10, 20] );
    } );

    /*describe( 'constructor', function () {
        it( 'from another collection', function () {
            var otherList = new LinkedList();
            otherList.add( 10 );
            otherList.add( 20 );

            var list = new LinkedList( otherList );

            expect( list.toArray() ).toEqual( [10, 20] );
        } );
    } );*/
} );