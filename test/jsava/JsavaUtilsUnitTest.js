describe( 'Utils', function () {
    var Utils = jsava.Utils;

    describe( 'arrayOfGivenSize()', function () {
        it( 'creates null array of given size', function () {
            expect( Utils.arrayOfGivenSize( 3, null ) ).toEqual( [null, null, null] );
        } );

        it( 'creates array of given size with given default value', function () {
            expect( Utils.arrayOfGivenSize( 3, 42 ) ).toEqual( [42, 42, 42] );
        } );
    } );
} );