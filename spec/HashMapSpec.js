describe( 'HashMap', function () {
    var HashMap = jsava.util.HashMap,
        map;

    beforeEach( function () {
        map = new HashMap();
    } );

    it( 'has the correct class name', function () {
        expect( map.getClassName() ).toBe( 'jsava.util.HashMap' );
    } );

    describe( 'constructor', function () {
        it( 'without any parameters', function () {
            expect( map._loadFactor ).toBe( HashMap.DEFAULT_LOAD_FACTOR );
            expect( map._table.length ).toBe( 16 );
        } );

        it( 'with custom initial capacity', function () {
            var mapWithParameters = new HashMap( 2 );
            expect( mapWithParameters._table.length ).toBe( 2 );
        } );

        it( 'with custom initial capacity that is not a power of two', function () {
            var mapWithParameters = new HashMap( 3 );
            expect( mapWithParameters._table.length ).toBe( 4 );
        } );

        it( 'with custom initial capacity and a custom load factor', function () {
            var mapWithParameters = new HashMap( 4, 0.5 );
            expect( mapWithParameters._table.length ).toBe( 4 );
            expect( mapWithParameters._threshold ).toBe( 2 );
        } );

        it( 'with another map', function () {
            // TODO check if this is actually correct
            var otherMap = new HashMap();
            for( var i = 1; i <= 32; i++ ) {
                otherMap.put( i, i );
            }
            var mapWithParameters = new HashMap( otherMap );
            expect( mapWithParameters._table.length ).toBe( 64 );
        } );
    } );

    describe( 'put and get', function () {
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
    } );

    describe( 'putAll', function () {
        var otherMap;

        beforeEach( function () {
            otherMap = new HashMap();
            otherMap.put( 1, 10 );
            otherMap.put( 2, 20 );
            otherMap.put( 3, 30 );
        } );

        it( 'can transfer all entries of another map into an empty map', function () {
            map.putAll( otherMap );

            expect( map.size() ).toBe( 3 );
            expect( map.get( 1 ) ).toBe( 10 );
            expect( map.get( 2 ) ).toBe( 20 );
            expect( map.get( 3 ) ).toBe( 30 );
        } );

        it( 'can transfer all entries of another map into a non-empty map with no conflicts', function () {
            map.put( 4, 40 );
            map.putAll( otherMap );

            expect( map.size() ).toBe( 4 );
            expect( map.get( 1 ) ).toBe( 10 );
            expect( map.get( 2 ) ).toBe( 20 );
            expect( map.get( 3 ) ).toBe( 30 );
            expect( map.get( 4 ) ).toBe( 40 );
        } );

        it( 'can transfer all entries of another map into a non-empty map with conflicts', function () {
            map.put( 1, -10 );
            map.put( 4, 40 );
            map.putAll( otherMap );

            expect( map.size() ).toBe( 4 );
            expect( map.get( 1 ) ).toBe( 10 );
            expect( map.get( 2 ) ).toBe( 20 );
            expect( map.get( 3 ) ).toBe( 30 );
            expect( map.get( 4 ) ).toBe( 40 );
        } );
    } );

    // TODO also try removing non-existent element
    it( 'remove removes an element correctly', function () {
        map.put( 1, 1 );

        map.remove( 1 );
        expect( map.get( 1 ) ).toBe( null );
        expect( map.size() ).toBe( 0 );
    } );

    it( 'clear empties the map', function () {
        map.put( 1, 1 );
        map.put( 2, 2 );
        map.put( 5, 5 );

        map.clear();

        expect( map.size() ).toBe( 0 );
        expect( map.get( 1 ) ).toBe( null );
        expect( map.get( 2 ) ).toBe( null );
        expect( map.get( 5 ) ).toBe( null );
    } );

    it( 'size counts the number of entries', function () {
        expect( map.size() ).toBe( 0 );

        map.put( 1, 1 );
        expect( map.size() ).toBe( 1 );

        map.put( 2, 2 );
        map.put( 3, 3 );
        expect( map.size() ).toBe( 3 );

        map.remove( 3 );
        map.remove( 2 );
        expect( map.size() ).toBe( 1 );
    } );

    it( 'isEmpty returns whether or not the map is empty', function () {
        expect( map.isEmpty() ).toBe( true );

        map.put( 0, 0 );
        expect( map.isEmpty() ).toBe( false );

        map.remove( 0 );
        expect( map.isEmpty() ).toBe( true );
    } );

    // TODO go through all methods programmatically to see what to test

    /*
     _resize
     putAll
     containsKey
     containsValue
     clone
     keySet
     values
     entrySet
     equals
     hashCode
     toString
     notify
     notifyAll
     */
} );