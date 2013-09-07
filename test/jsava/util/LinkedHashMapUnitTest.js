describe( 'LinkedHashMap', function () {
    var LinkedHashMap = jsava.util.LinkedHashMap,
        map;

    beforeEach( function () {
        map = new LinkedHashMap();
    } );

    it( 'has the correct class name', function () {
        expect( map.getClassName() ).toBe( 'jsava.util.LinkedHashMap' );
    } );

    it( 'clear() empties the map', function () {
        map.put( 1, 1 );
        map.put( 2, 2 );
        map.put( 5, 5 );

        map.clear();

        expect( map.size() ).toBe( 0 );
        expect( map.get( 1 ) ).toBe( null );
        expect( map.get( 2 ) ).toBe( null );
        expect( map.get( 5 ) ).toBe( null );
    } );

    describe( 'constructor', function () {
        it( 'without accessOrder', function () {
            expect( map.accessOrder ).toBe( false );
        } );

        it( 'with accessOrder', function () {
            map = new LinkedHashMap( 10, 0.75, true );
            expect( map.accessOrder ).toBe( true );
        } );
    } );

    describe( 'get()', function () {
        it( 'work for a simple value', function () {
            var expectedKey = 1,
                expectedValue = 'Hello World';
            map.put( expectedKey, expectedValue );

            expect( map.get( expectedKey ) ).toBe( expectedValue );
        } );

        it( 'work for several values', function () {
            map.put( 1, 'One' );
            map.put( 5, 'Five' );
            map.put( 10, 'Ten' );

            expect( map.get( 1 ) ).toBe( 'One' );
            expect( map.get( 5 ) ).toBe( 'Five' );
            expect( map.get( 10 ) ).toBe( 'Ten' );
        } );

        it( 'can deal with overwriting values', function () {
            map.put( 1, 'Old Value' );
            var oldValue = map.put( 1, 'New Value' );

            expect( oldValue ).toBe( 'Old Value' );
            expect( map.get( 1 ) ).toBe( 'New Value' );
        } );

        it( 'work with null values', function () {
            map.put( null, 'Null Value' );
            expect( map.get( null ) ).toBe( 'Null Value' );

            map.put( 0, null );
            expect( map.get( 0 ) ).toBe( null );
        } );

        it( 'work with many values', function () {
            for( var i = 1; i <= 100; i++ ) {
                map.put( i, i * i );
            }

            expect( map.size() ).toBe( 100 );
            for( var j = 1; j <= map.size(); j++ ) {
                expect( map.get( j ) ).toBe( j * j );
            }
        } );

        it( 'work with complex types', function () {
            var key1 = new jsava.lang.Object(),
                key2 = new jsava.lang.Object(),
                value1 = new LinkedHashMap(),
                value2 = new LinkedHashMap();
            map.put( key1, value1 );
            map.put( key2, value2 );

            value1.put( 1, 10 );
            value2.put( 2, 20 );
            value2.put( 3, 30 );

            expect( map.size() ).toBe( 2 );
            expect( map.get( key1 ).size() ).toBe( 1 );
            expect( map.get( key2 ).size() ).toBe( 2 );
            expect( map.get( key1 ).get( 1 ) ).toBe( 10 );
            expect( map.get( key2 ).get( 2 ) ).toBe( 20 );
            expect( map.get( key2 ).get( 3 ) ).toBe( 30 );
        } );
    } );

    describe( 'containsValue()', function () {
        it( 'can verify the presence of a value', function () {
            map.put( 1, 10 );
            expect( map.containsValue( 10 ) ).toBe( true );
        } );

        it( 'can verify the absence of a value', function () {
            expect( map.containsValue( 10 ) ).toBe( false );
        } );
    } );

    describe( 'keySet(), values() and entrySet()', function () {
        var keys = [1, 2, 5],
            values = [10, 20, 50];

        beforeEach( function () {
            map.put( keys[0], values[0] );
            map.put( keys[1], values[1] );
            map.put( keys[2], values[2] );
        } );

        it( 'keySet() returns the correct set', function () {
            expect( map.keySet().size() ).toBe( 3 );

            var iterator = map.keySet().iterator(),
                counter = 0;
            while( iterator.hasNext() ) {
                expect( iterator.next() ).toBe( keys[counter++] );
            }

            expect( counter ).toBe( keys.length );
        } );

        it( 'values() returns the correct set', function () {
            expect( map.values().size() ).toBe( 3 );

            var iterator = map.values().iterator(),
                counter = 0;
            while( iterator.hasNext() ) {
                expect( iterator.next() ).toBe( values[counter++] );
            }

            expect( counter ).toBe( values.length );
        } );

        it( 'entrySet() returns the correct set', function () {
            expect( map.entrySet().size() ).toBe( 3 );

            var iterator = map.entrySet().iterator(),
                counter = 0;
            while( iterator.hasNext() ) {
                var entry = iterator.next();
                expect( entry.getKey() ).toBe( keys[counter] );
                expect( entry.getValue() ).toBe( values[counter] );

                counter++;
            }

            expect( counter ).toBe( map.size() );
        } );
    } );

    describe( 'removeEldestEntry()', function () {
        it( 'works', function () {
            var map = new (jsava.Utils.createAnonymousClass( {
                extend: LinkedHashMap,

                members: {
                    removeEldestEntry: function (eldest) {
                        return eldest.getValue() <= 5;
                    }
                }
            } ))();

            map.put( 1, 1 );
            expect( map.size() ).toBe( 0 );

            map.put( 2, 5 );
            expect( map.size() ).toBe( 0 );

            map.put( 3, 10 );
            expect( map.size() ).toBe( 1 );

            map.put( 4, 20 );
            expect( map.size() ).toBe( 2 );

            map.put( 5, 1 );
            expect( map.size() ).toBe( 3 );
        } );
    } );

    describe( 'accessOrder', function () {
        var assertIterationOrder = function (expectedOrder) {
            var it = map.entrySet().iterator();
            while( it.hasNext() ) {
                expect( it.next().getKey() ).toBe( expectedOrder.shift() );
            }

            expect( expectedOrder.length ).toBe( 0 );
        };

        it( 'changes the iteration order to the order of last access if activated', function () {
            map = new LinkedHashMap( 10, 0.75, true );
            map.put( 1, 10 );
            map.put( 3, 30 );

            assertIterationOrder( [1, 3] );

            map.put( 2, 20 );

            assertIterationOrder( [1, 3, 2] );

            map.get( 1 );

            assertIterationOrder( [3, 2, 1] );

            map.put( 1, 42 );
            map.get( 3 );
            map.put( 5, 50 );

            assertIterationOrder( [2, 1, 3, 5] );
        } );

        it( 'preserves the insert order if deactivated', function () {
            map = new LinkedHashMap( 10, 0.75, false );
            map.put( 1, 10 );
            map.put( 3, 30 );

            assertIterationOrder( [1, 3] );

            map.put( 2, 20 );

            assertIterationOrder( [1, 3, 2] );

            map.get( 1 );

            assertIterationOrder( [1, 3, 2] );

            map.put( 1, 42 );
            map.get( 3 );
            map.put( 5, 50 );

            assertIterationOrder( [1, 3, 2, 5] );
        } );
    } );
} );