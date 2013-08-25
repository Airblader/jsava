describe( 'TreeSet', function () {
    var TreeSet = jsava.util.TreeSet,
        set;

    beforeEach( function () {
        set = new TreeSet();
    } );

    it( 'has the correct class name', function () {
        expect( set.getClassName() ).toBe( 'jsava.util.TreeSet' );
    } );
} );