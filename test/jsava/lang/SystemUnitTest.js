describe( 'System', function () {
    var System = jsava.lang.System;

    describe( 'arraycopy()', function () {
        it( 'can copy an array into another one', function () {
            var source = [0, 1, 2],
                destination = [3, 4, 5];
            System.arraycopy( source, 0, destination, 0, source.length );

            expect( destination ).toEqual( source );
        } );

        it( 'can append an array to another one', function () {
            var source = [2, 3],
                destination = [0, 1];
            System.arraycopy( source, 0, destination, destination.length, source.length );

            expect( destination ).toEqual( [0, 1, 2, 3] );
        } );

        it( 'can shift elements of the same array to the right', function () {
            var arr = [0, 1, 2, 3, 4];
            System.arraycopy( arr, 2, arr, 3, 3 );

            expect( arr ).toEqual( [0, 1, 2, 2, 3, 4] );
        } );
    } );
} );