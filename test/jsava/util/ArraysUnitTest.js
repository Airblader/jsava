describe( 'Arrays', function () {
    var Arrays = jsava.util.Arrays;

    describe( 'copyOf', function () {
        var sourceArray = [0, 1, 2];

        it( 'returns same array of newSize equals old size', function () {
            expect( Arrays.copyOf( sourceArray, sourceArray.length ) ).toEqual( sourceArray );
        } );

        it( 'can trim an array', function () {
            expect( Arrays.copyOf( sourceArray, 2 ) ).toEqual( [0, 1] );
        } );

        it( 'can pad an array', function () {
            expect( Arrays.copyOf( sourceArray, 5 ) ).toEqual( [0, 1, 2, null, null] );
        } );
    } );
} );