describe( 'HashMap', function () {
    var HashMap = jsava.util.HashMap,
        map;

    beforeEach( function () {
        map = new HashMap();
    } );

    it( 'has the correct class name', function () {
        expect( map.getClassName() ).toBe( 'jsava.util.HashMap' );
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

    it( 'size() counts the number of entries', function () {
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

    it( 'isEmpty() returns whether or not the map is empty', function () {
        expect( map.isEmpty() ).toBe( true );

        map.put( 0, 0 );
        expect( map.isEmpty() ).toBe( false );

        map.remove( 0 );
        expect( map.isEmpty() ).toBe( true );
    } );

    it( 'toString() returns a correct string representation', function () {
        expect( map.toString() ).toBe( '{}' );

        map.put( 1, 10 );
        map.put( 2, 20 );
        expect( map.toString() ).toBe( '{1=10, 2=20}' );
    } );

    describe( 'constructor', function () {
        it( 'without any parameters', function () {
            expect( map.loadFactor ).toBe( HashMap.DEFAULT_LOAD_FACTOR );
            expect( map.table.length ).toBe( 16 );
        } );

        it( 'with custom initial capacity', function () {
            var mapWithParameters = new HashMap( 2 );
            expect( mapWithParameters.table.length ).toBe( 2 );
        } );

        it( 'with custom initial capacity that is not a power of two', function () {
            var mapWithParameters = new HashMap( 3 );
            expect( mapWithParameters.table.length ).toBe( 4 );
        } );

        it( 'with custom initial capacity and a custom load factor', function () {
            var mapWithParameters = new HashMap( 4, 0.5 );
            expect( mapWithParameters.table.length ).toBe( 4 );
            expect( mapWithParameters.threshold ).toBe( 2 );
        } );

        it( 'with another map', function () {
            var otherMap = new HashMap();
            for( var i = 1; i <= 32; i++ ) {
                otherMap.put( i, i );
            }
            var mapWithParameters = new HashMap( otherMap );
            expect( mapWithParameters.table.length ).toBe( 64 );
        } );
    } );

    describe( 'put() and get()', function () {
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
                value1 = new HashMap(),
                value2 = new HashMap();
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

    describe( 'putAll()', function () {
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

    describe( 'remove()', function () {
        it( 'can remove an existing element', function () {
            map.put( 1, 42 );

            var removedElement = map.remove( 1 );
            expect( removedElement ).toBe( 42 );
            expect( map.get( 1 ) ).toBe( null );
            expect( map.size() ).toBe( 0 );
        } );

        it( 'can handle trying to remove a non-existent element', function () {
            expect( map.remove( 1 ) ).toBe( null );
        } );

        it( 'leaves other elements untouched', function () {
            map.put( 1, 10 );
            map.put( 2, 20 );
            map.put( 3, 30 );

            map.remove( 2 );

            expect( map.size() ).toBe( 2 );
            expect( map.get( 1 ) ).toBe( 10 );
            expect( map.get( 2 ) ).toBe( null );
            expect( map.get( 3 ) ).toBe( 30 );
        } );
    } );

    describe( 'containsKey() and containsValue()', function () {
        it( 'can verify the presence of a key', function () {
            map.put( 1, 10 );
            expect( map.containsKey( 1 ) ).toBe( true );
        } );

        it( 'can verify the absence of a key', function () {
            expect( map.containsKey( 1 ) ).toBe( false );
        } );

        it( 'can verify the presence of a value', function () {
            map.put( 1, 10 );
            expect( map.containsValue( 10 ) ).toBe( true );
        } );

        it( 'can verify the absence of a value', function () {
            expect( map.containsValue( 10 ) ).toBe( false );
        } );
    } );

    describe( 'equals()', function () {
        it( 'returns true for the same object', function () {
            expect( map.equals( map ) ).toBe( true );

            map.put( 1, 10 );
            expect( map.equals( map ) ).toBe( true );
        } );

        it( 'returns true for another map with same content', function () {
            var otherMap = new HashMap();

            expect( map.equals( otherMap ) ).toBe( true );
            expect( otherMap.equals( map ) ).toBe( true );

            map.put( 1, 10 );
            otherMap.put( 1, 10 );

            expect( map.equals( otherMap ) ).toBe( true );
            expect( otherMap.equals( map ) ).toBe( true );
        } );

        it( 'returns false for different maps', function () {
            var otherMap = new HashMap();
            map.put( 1, 10 );

            expect( map.equals( otherMap ) ).toBe( false );
            expect( map.equals( null ) ).toBe( false );
            expect( otherMap.equals( map ) ).toBe( false );
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

    describe( 'clone()', function () {
        it( 'can clone an empty map', function () {
            var otherMap = map.clone();
            expect( otherMap.isEmpty() ).toBe( true );
        } );

        it( 'can clone a map with entries', function () {
            map.put( 1, 10 );
            map.put( 2, 20 );

            var otherMap = map.clone();
            expect( otherMap.size() ).toBe( 2 );
            expect( otherMap.get( 1 ) ).toBe( 10 );
            expect( otherMap.get( 2 ) ).toBe( 20 );
        } );

        it( 'creates a shallow copy', function () {
            var valueMap = new HashMap();
            map.put( 1, valueMap );

            var otherMap = map.clone();
            otherMap.get( 1 ).put( 2, 20 );

            expect( valueMap.get( 2 ) ).toBe( 20 );
        } );
    } );

    describe( 'recordAccess() and recordRemoval()', function () {
        var snapshotAfterRemoval = false,
            snapshotAfterAccess = false,
            map = new (jsava.Utils.createAnonymousClass( {
                extend: HashMap,

                statics: {
                    Entry: jsava.Utils.createAnonymousClass( {
                        extend: HashMap.Entry,

                        members: {
                            recordAccess: function () {
                                snapshotAfterAccess = true;
                            },

                            recordRemoval: function () {
                                snapshotAfterRemoval = true;
                            }
                        }
                    } )
                }
            } ))();

        map.put( 1, 10 );
        map.put( 2, 20 );

        it( 'work', function () {
            expect( snapshotAfterAccess ).toBe( false );
            map.put( 1, 42 );
            expect( snapshotAfterAccess ).toBe( true );

            expect( snapshotAfterRemoval ).toBe( false );
            map.remove( 1 );
            expect( snapshotAfterRemoval ).toBe( true );
        } );
    } );
} );