describe( 'Throwable', function () {
    var Throwable = jsava.lang.Throwable;

    describe( 'constructor', function () {
        it( 'can initialize an empty object', function () {
            var t = new Throwable();

            expect( t.getCause() ).toBe( t );
            expect( t.getMessage() ).toBe( null );
        } );

        it( 'can have a detail message', function () {
            expect( new Throwable( 'Detail Message' ).getMessage() ).toBe( 'Detail Message' );
        } );

        it( 'can have a cause', function () {
            var cause = new Throwable();
            expect( new Throwable( cause ).getCause() ).toBe( cause );
        } );

        it( 'can have a detail message and a cause', function () {
            var cause = new Throwable(),
                t = new Throwable( 'Detail Message', cause );

            expect( t.getMessage() ).toBe( 'Detail Message' );
            expect( t.getCause() ).toBe( cause );
        } );
    } );

    it( 'toString() returns proper string representation', function () {
        var t = new Throwable( 'Some message' );
        expect( t.toString() ).toBe( 'jsava.lang.Throwable: Some message' );
    } );
} );