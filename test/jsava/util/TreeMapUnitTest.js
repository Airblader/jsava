describe( 'TreeMap', function () {
    var TreeMap = jsava.util.TreeMap,
        set;

    beforeEach( function () {
        set = new TreeMap();
    } );

    it( 'has the correct class name', function () {
        expect( set.getClassName() ).toBe( 'jsava.util.TreeMap' );
    } );
} );