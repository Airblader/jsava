describe( 'ArrayList', function () {
    var ArrayList = jsava.util.ArrayList,
        list;

    beforeEach( function () {
        list = new ArrayList();
    } );

    it( 'has the correct class name', function () {
        expect( list.getClassName() ).toBe( 'jsava.util.ArrayList' );
    } );

    it( 'size() counts the number of items', function () {
        expect( list.size() ).toBe( 0 );

        list.add( 10 );
        expect( list.size() ).toBe( 1 );

        list.add( 20 );
        list.add( 30 );
        expect( list.size() ).toBe( 3 );
    } );

    it( 'isEmpty() returns whether or not the list is empty', function () {
        expect( list.isEmpty() ).toBe( true );

        list.add( 10 );
        expect( list.isEmpty() ).toBe( false );
    } );

    it( 'clear() empties the list', function () {
        list.add( 10 );
        list.add( 20 );

        expect( list.isEmpty() ).toBe( false );
        list.clear();
        expect( list.isEmpty() ).toBe( true );
    } );

    it( 'toArray() yields a correct array representation of the list', function () {
        expect( list.toArray() ).toEqual( [] );

        list.add( 10 );
        list.add( 20 );
        list.add( 30 );
        expect( list.toArray() ).toEqual( [10, 20, 30] );
    } );

    it( 'trimToSize() trims unnecessary memory allocation', function () {
        expect( list.elementData.length ).toBe( 10 );

        list.add( 10 );
        list.add( 20 );

        list.trimtoSize();
        expect( list.elementData.length ).toBe( 2 );
    } );

    describe( 'constructor', function () {
        it( 'without any parameters', function () {
            expect( list.elementData.length ).toBe( 10 );
            expect( list.size() ).toBe( 0 );
        } );

        it( 'with custom initial capacity', function () {
            var list = new ArrayList( 100 );

            expect( list.elementData.length ).toBe( 100 );
            expect( list.size() ).toBe( 0 );
        } );

        it( 'from another collection', function () {
            var otherList = new ArrayList();
            otherList.add( 10 );
            otherList.add( 20 );

            var list = new ArrayList( otherList );

            expect( list.elementData.length ).toBe( 2 );
            expect( list.size() ).toBe( 2 );
        } );
    } );

    describe( 'set() and get()', function () {
        beforeEach( function () {
            list.add( 10 );
            list.add( 20 );
            list.add( 30 );
        } );

        it( 'work for a simple value', function () {
            list.set( 1, 42 );
            expect( list.get( 1 ) ).toBe( 42 );
        } );

        it( 'work for several values', function () {
            list.set( 1, -20 );
            list.set( 2, -30 );

            expect( list.get( 0 ) ).toBe( 10 );
            expect( list.get( 1 ) ).toBe( -20 );
            expect( list.get( 2 ) ).toBe( -30 );
        } );

        it( 'work with a null value', function () {
            list.set( 1, null );
            expect( list.get( 1 ) ).toBe( null );
        } );

        it( 'work with many values', function () {
            var list = new ArrayList();
            for( var i = 0; i < 100; i++ ) {
                list.add( i * i );
            }

            expect( list.size() ).toBe( 100 );
            for( var i = 0; i < 100; i++ ) {
                expect( list.get( i ) ).toBe( i * i );
            }
        } );

        it( 'work with complex types', function () {
            // initial setup
            var list = new ArrayList(),
                item1 = new jsava.lang.Object(),
                item2 = new jsava.lang.Object();
            list.add( item1 );
            list.add( item2 );

            // now the actual test by swapping items
            list.set( 0, item2 );
            list.set( 1, item1 );

            expect( list.get( 0 ) ).toBe( item2 );
            expect( list.get( 1 ) ).toBe( item1 );
        } );
    } );

    describe( 'add() and addAll()', function () {
        it( 'can add a simple item', function () {
            list.add( 'Hello World' );

            expect( list.size() ).toBe( 1 );
            expect( list.get( 0 ) ).toBe( 'Hello World' );
        } );

        it( 'can add a complex type item', function () {
            var item = new jsava.lang.Object();
            item.__test_property = -42;

            list.add( item );

            expect( list.size() ).toBe( 1 );
            expect( list.get( 0 ) ).toEqual( item );
        } );

        it( 'can add an element at a specific position', function () {
            list.add( 10 );
            list.add( 20 );
            list.add( 30 );

            list.add( 1, 42 );

            expect( list.size() ).toBe( 4 );
            expect( list.get( 0 ) ).toBe( 10 );
            expect( list.get( 1 ) ).toBe( 42 );
            expect( list.get( 2 ) ).toBe( 20 );
            expect( list.get( 3 ) ).toBe( 30 );
        } );

        it( 'can add another list to an empty list', function () {
            var otherList = new ArrayList();
            otherList.add( 10 );
            otherList.add( 20 );

            list.addAll( otherList );

            expect( list.size() ).toBe( 2 );
            expect( list.get( 0 ) ).toBe( 10 );
            expect( list.get( 1 ) ).toBe( 20 );
        } );

        it( 'can add another list to an existing list', function () {
            list.add( 10 );
            list.add( 20 );

            var otherList = new ArrayList();
            otherList.add( 30 );
            otherList.add( 40 );

            list.addAll( otherList );

            expect( list.size() ).toBe( 4 );
            expect( list.get( 0 ) ).toBe( 10 );
            expect( list.get( 1 ) ).toBe( 20 );
            expect( list.get( 2 ) ).toBe( 30 );
            expect( list.get( 3 ) ).toBe( 40 );
        } );

        it( 'can add another list at a specific position', function () {
            list.add( 10 );
            list.add( 20 );
            list.add( 30 );

            var otherList = new ArrayList();
            otherList.add( 11 );
            otherList.add( 12 );

            list.addAll( 1, otherList );

            expect( list.size() ).toBe( 5 );
            expect( list.get( 0 ) ).toBe( 10 );
            expect( list.get( 1 ) ).toBe( 11 );
            expect( list.get( 2 ) ).toBe( 12 );
            expect( list.get( 3 ) ).toBe( 20 );
            expect( list.get( 4 ) ).toBe( 30 );
        } );
    } );

    describe( 'remove()', function () {
        var items = [
            new jsava.lang.Object(),
            new jsava.lang.Object(),
            new jsava.lang.Object()
        ];

        beforeEach( function () {
            list.add( items[0] );
            list.add( items[1] );
            list.add( items[2] );
        } );

        it( 'can remove an item by element', function () {
            var removedItem = list.remove( items[1] );

            expect( list.size() ).toBe( 2 );
            expect( removedItem ).toBe( true );
            expect( list.get( 0 ) ).toEqual( items[0] );
            expect( list.get( 1 ) ).toEqual( items[2] );
        } );

        it( 'can remove an item by index', function () {
            var removedItem = list.remove( 1 );

            expect( list.size() ).toBe( 2 );
            expect( removedItem ).toEqual( items[1] );
            expect( list.get( 0 ) ).toEqual( items[0] );
            expect( list.get( 1 ) ).toEqual( items[2] );
        } );

        it( 'can handle trying to remove a non-existing item by element', function () {
            expect( list.remove( new jsava.lang.Object() ) ).toBe( false );
        } );
    } );

    describe( 'equals()', function () {
        beforeEach( function () {
            list.add( 10 );
            list.add( 20 );
        } );

        it( 'returns true if compared to itself', function () {
            expect( list.equals( list ) ).toBe( true );
        } );

        it( 'returns true if compared to another but identical list', function () {
            var otherList = new ArrayList();
            otherList.add( 10 );
            otherList.add( 20 );

            expect( list.equals( otherList ) ).toBe( true );
            expect( otherList.equals( list ) ).toBe( true );
        } );

        it( 'returns false if compared to a different map', function () {
            var otherList = new ArrayList();
            otherList.add( 10 );

            expect( list.equals( otherList ) ).toBe( false );
            expect( otherList.equals( list ) ).toBe( false );
        } );

        it( 'returns false if compared to null', function () {
            expect( list.equals( null ) ).toBe( false );
        } );
    } );

    describe( 'clone()', function () {
        it( 'can clone an empty list', function () {
            expect( list.clone().equals( list ) ).toBe( true );
        } );

        it( 'can clone a list with items', function () {
            list.add( 10 );
            list.add( 20 );

            expect( list.clone().equals( list ) ).toBe( true );
        } );
    } );

    describe( 'contains()', function () {
        beforeEach( function () {
            list.add( 10 );
            list.add( 20 );
            list.add( null );
            list.add( 30 );
        } );

        it( 'returns true if the value is in the list', function () {
            expect( list.contains( 20 ) ).toBe( true );
        } );

        it( 'returns false if the value is not in the list', function () {
            expect( list.contains( 50 ) ).toBe( false );
        } );

        it( 'returns true if null is in the list', function () {
            expect( list.contains( null ) ).toBe( true );
        } );

        it( 'returns false if null is not in the list', function () {
            list.remove( null );
            expect( list.contains( null ) ).toBe( false );
        } );
    } );

    describe( 'indexOf() and lastIndexOf()', function () {
        beforeEach( function () {
            list.add( 0 );
            list.add( 10 ); // single occurence
            list.add( 20 );
            list.add( 30 ); // multiple occurence #1
            list.add( 40 );
            list.add( 30 ); // multiple occurence #2
            list.add( 50 );
            list.add( null ); // single occurence of null
            list.add( 60 );
        } );

        describe( 'indexOf()', function () {
            it( 'finds a single occurence', function () {
                expect( list.indexOf( 10 ) ).toBe( 1 );
            } );

            it( 'finds a single occurence of null', function () {
                expect( list.indexOf( null ) ).toBe( 7 );
            } );

            it( 'finds the first of multiple occurences', function () {
                expect( list.indexOf( 30 ) ).toBe( 3 );
            } );

            it( 'returns -1 if the value is not found', function () {
                expect( list.indexOf( 42 ) ).toBe( -1 );
            } );
        } );

        describe( 'lastIndexOf()', function () {
            it( 'finds a single occurence', function () {
                expect( list.lastIndexOf( 10 ) ).toBe( 1 );
            } );

            it( 'finds a single occurence of null', function () {
                expect( list.lastIndexOf( null ) ).toBe( 7 );
            } );

            it( 'finds the last of multiple occurences', function () {
                expect( list.lastIndexOf( 30 ) ).toBe( 5 );
            } );

            it( 'returns -1 if the value is not found', function () {
                expect( list.lastIndexOf( 42 ) ).toBe( -1 );
            } );
        } );
    } );
} );