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
        map.put( 1, 3 );
        expect( map._size ).toBe( 1 );
    } )
} );
