describe( 'TreeMap', function () {
    var TreeMap = jsava.util.TreeMap,
        map;

    beforeEach( function () {
        map = new TreeMap();
    } );

    it( 'has the correct class name', function () {
        expect( map.getClassName() ).toBe( 'jsava.util.TreeMap' );
    } );

    it( 'can have entries', function () {
        map.put( 1, '1' );
        expect( map._size ).toBe( 1 );
        map.put( 2, '2' );
        expect( map._size ).toBe( 2 );
    } );

    it( 'can have entries 2', function () {
        // adapted from http://www.d.umn.edu/~ddunham/cs4521f10/assignments/rbeg.txt
        map.put( 9, null );
        map.put( 8, null );
        expect( map.root.key ).toBe( 9 );
        expect( map.root.left.key ).toBe( 8 );
        expect( map.root.left.parent.key ).toBe( 9 );
        map.put( 7, null );
        expect( map.root.left.key ).toBe( 7 );
        expect( map.root.right.key ).toBe( 9 );
        map.put( 3, null );
        expect( map.root.left.left.key ).toBe( 3 );
        expect( map.root.right.key ).toBe( 9 );
        map.put( 5, null );
        expect( map.root.left.left.key ).toBe( 3 );
        expect( map.root.left.right.key ).toBe( 7 );
        expect( map.root.right.key ).toBe( 9 );
        map.put( 2, null );
        expect( map.root.left.left.key ).toBe( 3 );
        expect( map.root.left.right.key ).toBe( 7 );
        expect( map.root.right.key ).toBe( 9 );
        expect( map.root.left.left.left.key ).toBe( 2 );
    } );
} );
