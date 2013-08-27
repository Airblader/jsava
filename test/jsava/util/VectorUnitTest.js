describe( 'Vector', function () {
    var Vector = jsava.util.Vector,
        vector;

    beforeEach( function () {
        vector = new Vector();
    } );

    it( 'has the correct class name', function () {
        expect( vector.getClassName() ).toBe( 'jsava.util.Vector' );
    } );

    it( 'size() counts the number of items', function () {
        expect( vector.size() ).toBe( 0 );

        vector.add( 10 );
        expect( vector.size() ).toBe( 1 );

        vector.add( 20 );
        vector.add( 30 );
        expect( vector.size() ).toBe( 3 );
    } );
} );