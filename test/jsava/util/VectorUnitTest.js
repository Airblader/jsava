describe( 'Vector', function () {
    var Vector = jsava.util.Vector,
        vector,

        add = function () {
            var args = Array.prototype.slice.call( arguments );
            for( var i = 0; i < args.length; i++ ) {
                vector.add( args[i] );
            }
        },

        toCollection = function () {
            var args = Array.prototype.slice.call( arguments ),
                collection = new ArrayList();
            for( var i = 0; i < args.length; i++ ) {
                collection.add( args[i] );
            }

            return collection;
        };

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

        add( 20, 30 );
        expect( vector.size() ).toBe( 3 );
    } );

    it( 'isEmpty() returns whether or not the vector is empty', function () {
        expect( vector.isEmpty() ).toBe( true );

        vector.add( 10 );
        expect( vector.isEmpty() ).toBe( false );
    } );

    it( 'toArray() yields a correct array representation of the vector', function () {
        expect( vector.toArray() ).toEqual( [] );

        add( 10, 20, 30 );
        expect( vector.toArray() ).toEqual( [10, 20, 30] );
    } );

    it( 'trimToSize() works', function () {
        expect( vector.capacity() ).toBe( 10 );
        vector.trimToSize();
        expect( vector.capacity() ).toBe( 0 );
    } );

    it( 'toString() works', function () {
        add( 42, 84 );
        expect( vector.toString() ).toBe( '[42, 84]' );
    } );

    it( 'copyInto() works', function () {
        add( 10, 20 );

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
            add( 10, 30 );

            vector.add( 1, 20 );
            expect( vector.size() ).toBe( 3 );

            vector.trimToSize();
            expect( vector.elementData ).toEqual( [10, 20, 30] );
        } );
    } );

    describe( 'remove()', function () {
        it( 'works for index', function () {
            add( 10, 20, 30 );

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
            add( 10, 20, 32, 42 );
            vector.trimToSize();

            vector.setSize( 2 );
            expect( vector.size() ).toBe( 2 );
            expect( vector.elementData ).toEqual( [10, 20, null, null] );
        } );
    } );

    describe( 'contains()', function () {
        it( 'returns true if the object is contained', function () {
            add( 10, 20, 30 );
            expect( vector.contains( 20 ) ).toBe( true );
        } );

        it( 'returns false if the object is not contained', function () {
            expect( vector.contains( 42 ) ).toBe( false );
        } );
    } );

    describe( 'indexOf()', function () {
        it( 'returns the index for existing an existing element', function () {
            add( 10, 20, 30 );
            expect( vector.indexOf( 20 ) ).toBe( 1 );
        } );

        it( 'returns -1 if the element is not contained', function () {
            expect( vector.indexOf( 42 ) ).toBe( -1 );
        } );
    } );

    describe( 'lastIndexOf()', function () {
        it( 'returns the last index for an existing element', function () {
            add( 10, 20, 10, 30 );
            expect( vector.lastIndexOf( 10 ) ).toBe( 2 );
        } );

        it( 'returns -1 if the element is not contained', function () {
            expect( vector.lastIndexOf( 42 ) ).toBe( -1 );
        } );
    } );

    describe( 'firstElement() and lastElement()', function () {
        it( 'return the correct elements', function () {
            add( 10, 20, 30 );

            expect( vector.firstElement() ).toBe( 10 );
            expect( vector.lastElement() ).toBe( 30 );
        } );
    } );

    describe( 'elements()', function () {
        it( 'works', function () {
            var enumerator = vector.elements();
            expect( enumerator.hasMoreElements() ).toBe( false );

            add( 10, 20 );

            expect( enumerator.hasMoreElements() ).toBe( true );
            expect( enumerator.nextElement() ).toBe( 10 );
            expect( enumerator.hasMoreElements() ).toBe( true );
            expect( enumerator.nextElement() ).toBe( 20 );

            expect( enumerator.hasMoreElements() ).toBe( false );
        } );
    } );

    describe( 'elementAt()', function () {
        it( 'works', function () {
            add( 10, 20, 30 );
            expect( vector.elementAt( 1 ) ).toBe( 20 );
        } );
    } );

    describe( 'setElementAt()', function () {
        it( 'works', function () {
            add( 10, 20, 30 );

            vector.setElementAt( 42, 1 );
            expect( vector.get( 1 ) ).toBe( 42 );
        } );
    } );

    describe( 'insertElementAt()', function () {
        it( 'works', function () {
            add( 10, 30 );

            vector.insertElementAt( 20, 1 );
            expect( vector.toArray() ).toEqual( [10, 20, 30] );
        } );
    } );

    describe( 'removeElementAt()', function () {
        it( 'works', function () {
            add( 10, 20, 30 );

            vector.removeElementAt( 1 );
            expect( vector.toArray() ).toEqual( [10, 30] );
        } );
    } );

    describe( 'addElement()', function () {
        it( 'works', function () {
            vector.add( 10 );
            expect( vector.get( 0 ) ).toBe( 10 );

            vector.add( 20 );
            expect( vector.get( 1 ) ).toBe( 20 );
            expect( vector.size() ).toBe( 2 );
        } );
    } );

    describe( 'removeElement()', function () {
        it( 'works', function () {
            add( 10, 20, 30 );

            vector.removeElement( 20 );
            expect( vector.size() ).toBe( 2 );
            expect( vector.toArray() ).toEqual( [10, 30] );
        } );
    } );

    describe( 'removeAllElements()', function () {
        it( 'works', function () {
            add( 10, 20, 30 );
            expect( vector.isEmpty() ).toBe( false );

            vector.removeAllElements();
            expect( vector.isEmpty() ).toBe( true );
        } );
    } );

    describe( 'containsAll()', function () {
        it( 'works', function () {
            add( 10, 20, 30, 42 );

            expect( vector.containsAll( toCollection( 20, 42 ) ) ).toBe( true );
            expect( vector.containsAll( toCollection( 100 ) ) ).toBe( false );
        } );
    } );

    describe( 'addAll()', function () {
        it( 'works', function () {
            vector.addAll( toCollection( 10, 20, 30 ) );
            expect( vector.size() ).toBe( 3 );
            expect( vector.toArray() ).toEqual( [10, 20, 30] );
        } );
    } );

    describe( 'removeAll()', function () {
        it( 'works', function () {
            add( 10, 20, 42, 30 );

            vector.removeAll( toCollection( 20, 30 ) );
            expect( vector.size() ).toBe( 2 );
            expect( vector.toArray() ).toEqual( [10, 42] );
        } );
    } );

    describe( 'retainAll()', function () {
        it( 'works', function () {
            add( 10, 20, 42, 30 );

            vector.retainAll( toCollection( 20, 30 ) );
            expect( vector.size() ).toBe( 2 );
            expect( vector.toArray() ).toEqual( [20, 30] );
        } );
    } );

    describe( 'removeRange()', function () {
        it( 'works', function () {
            add( 10, 20, 30, 40, 50 );

            vector.removeRange( 1, 4 );
            expect( vector.size() ).toBe( 2 );
            expect( vector.toArray() ).toEqual( [10, 50] );
        } );
    } );

    describe( 'get()', function () {
        it( 'works', function () {
            add( 10, 20, 30 );

            expect( vector.get( 1 ) ).toBe( 20 );
        } );
    } );

    describe( 'set()', function () {
        it( 'works', function () {
            add( 10, 42, 30 );

            var oldValue = vector.set( 1, 20 );
            expect( oldValue ).toBe( 42 );
            expect( vector.get( 1 ) ).toBe( 20 );
        } );
    } );

    describe( 'equals()', function () {
        it( 'returns true if vectors are equal', function () {
            add( 10, 20 );

            var other = new Vector( 100 );
            other.add( 10 );
            other.add( 20 );

            expect( vector.equals( other ) ).toBe( true );
            expect( other.equals( vector ) ).toBe( true );
        } );

        it( 'returns false if vectors are not equal', function () {
            add( 10, 20 );

            var other = new Vector();
            other.add( 10 );

            expect( vector.equals( other ) ).toBe( false );
            expect( other.equals( vector ) ).toBe( false );
        } );
    } );

    describe( 'clone()', function () {
        it( 'works', function () {
            add( 10, 20, 30 );

            var cloned = vector.clone();
            expect( vector.equals( cloned ) ).toBe( true );
        } );
    } );

    describe( 'subList()', function () {
        // TODO not yet implemented
        xit( 'works', function () {
            add( 10, 20, 30, 40, 50, 60 );

            var subList = vector.subList( 1, 5 );
            expect( subList.toArray() ).toEqual( [10, 60] );
        } );
    } );
} );