describe( 'Arrays', function () {
    var Arrays = jsava.util.Arrays;

    describe( 'copyOf()', function () {
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

    describe( 'hashCode()', function () {
        it( 'can compute the hash of several objects', function () {
            var map = new jsava.util.HashMap();
            map.put( 1, 10 );
            map.put( 10, 42 );

            var list = new jsava.util.ArrayList();
            list.add( 10 );
            list.add( 42 );

            var obj = new jsava.lang.Object();
            obj.__fake_property = 42;

            expect( typeof Arrays.hashCode( [map, list, obj] ) ).toBe( 'number' );
        } );
    } );
} );