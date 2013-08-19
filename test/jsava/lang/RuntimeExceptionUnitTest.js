describe( 'RuntimeException', function () {
    var RuntimeException = jsava.lang.RuntimeException;

    it( 'constructor parameters are passed correctly', function () {
        var e = new RuntimeException( 'Some message' );
        expect( e.getMessage() ).toBe( 'Some message' );
    } );
} );