describe( 'Throwable', function () {
    var Throwable = jsava.lang.Throwable;

    describe( 'constructor', function () {
        it( 'can initialize an empty object', function () {
            var t = new Throwable();

            expect( t.__cause ).toBe( t );
            expect( t.__detailMessage ).toBe( null );
        } );
    } );
} );