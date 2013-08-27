describe( 'Vector', function () {
    var Vector = jsava.util.Vector,
        vector;

    beforeEach( function () {
        vector = new Vector();
    } );

    it( 'has the correct class name', function () {
        expect( vector.getClassName() ).toBe( 'jsava.util.Vector' );
    } );

    it( 'size() counts the number of items', function () {
        expect( vector.size() ).toBe( 0 );

        vector.add( 10 );
        expect( vector.size() ).toBe( 1 );

        vector.add( 20 );
        vector.add( 30 );
        expect( vector.size() ).toBe( 3 );
    } );

    it( 'isEmpty() returns whether or not the vector is empty', function () {
        expect( vector.isEmpty() ).toBe( true );

        vector.add( 10 );
        expect( vector.isEmpty() ).toBe( false );
    } );

    it( 'clear() empties the vector', function () {
        vector.add( 10 );
        vector.add( 20 );

        expect( vector.isEmpty() ).toBe( false );
        vector.clear();
        expect( vector.isEmpty() ).toBe( true );
    } );

    it( 'toArray() yields a correct array representation of the vector', function () {
        expect( vector.toArray() ).toEqual( [] );

        vector.add( 10 );
        vector.add( 20 );
        vector.add( 30 );
        expect( vector.toArray() ).toEqual( [10, 20, 30] );
    } );

    it( 'trimToSize() works', function () {
        expect( vector.capacity() ).toBe( 10 );
        vector.trimToSize();
        expect( vector.capacity() ).toBe( 0 );
    } );

    it( 'toString() works', function () {
        vector.add( 42 );
        vector.add( 84 );
        expect( vector.toString() ).toBe( '[42, 84]' );
    } );

    it( 'copyInto() works', function () {
        vector.add( 10 );
        vector.add( 20 );

        var anArray = [];
        vector.copyInto( anArray );
        expect( anArray ).toEqual( [10, 20] );
    } );

    describe( 'constructor', function () {
        it( 'without any parameters', function () {
            expect( vector.capacity() ).toBe( 10 );
            expect( vector.size() ).toBe( 0 );
        } );

        it( 'with initial capacity', function () {
            vector = new Vector( 42 );
            expect( vector.capacity() ).toBe( 42 );
            expect( vector.size() ).toBe( 0 );
        } );

        it( 'from another collection', function () {
            var collection = new ArrayList();
            collection.add( 10 );
            collection.add( 20 );

            vector = new Vector( collection );
            expect( vector.capacity() ).toBe( 2 );
            expect( vector.size() ).toBe( 2 );
        } );
    } );

    describe( 'add()', function () {
        it( 'works for single-argument signature', function () {
            vector.add( 10 );
            expect( vector.size() ).toBe( 1 );
            expect( vector.get( 0 ) ).toBe( 10 );
        } );

        it( 'works for specified position', function () {
            vector.add( 10 );
            vector.add( 30 );

            vector.add( 1, 20 );
            expect( vector.size() ).toBe( 3 );

            vector.trimToSize();
            expect( vector.elementData ).toEqual( [10, 20, 30] );
        } );
    } );

    describe( 'remove()', function () {
        it( 'works for index', function () {
            vector.add( 10 );
            vector.add( 20 );
            vector.add( 30 );

            var removedElement = vector.remove( 1 );
            expect( removedElement ).toBe( 20 );
            expect( vector.size() ).toBe( 2 );
        } );

        it( 'works for object', function () {
            var map = new HashMap();

            vector.add( new HashMap() );
            vector.add( map );
            vector.add( new HashMap() );

            var wasRemoved = vector.remove( map );
            expect( wasRemoved ).toBe( true );
            expect( vector.size() ).toBe( 2 );
        } );
    } );

    describe( 'setSize()', function () {
        it( 'works when expanding', function () {
            vector.trimToSize();
            expect( vector.capacity() ).toBe( 0 );

            vector.setSize( 3 );
            expect( vector.capacity() ).toBe( 3 );
            expect( vector.elementData ).toEqual( [null, null, null] );

        } );

        it( 'works when shrinking', function () {
            vector.add( 10 );
            vector.add( 20 );
            vector.add( 32 );
            vector.add( 42 );
            vector.trimToSize();

            vector.setSize( 2 );
            expect( vector.size() ).toBe( 2 );
            expect( vector.elementData ).toEqual( [10, 20, null, null] );
        } );
    } );

    /*
    TODO Methods that still need tested:
     elements
     contains
     indexOf
     lastIndexOf
     elementAt
     firstElement
     lastElement
     setElementAt
     removeElementAt
     insertElementAt
     addElement
     removeElement
     removeAllElements
     clone
     get
     set
     containsAll
     addAll
     removeAll
     retainAll
     equals
     hashCode
     subList
     removeRange */
} );