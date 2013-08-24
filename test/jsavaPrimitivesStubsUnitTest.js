describe( 'jsavaPrimitivesStubs', function () {
    describe( 'hashCode()', function () {
        describe( 'for Numbers', function () {
            it( 'uses the correct function', function () {
                expect( (42).hashCode ).toBe( Number.prototype.hashCode );
            } );

            it( 'returns the number itself for integers', function () {
                var number = 42;
                expect( number.hashCode() ).toBe( 42 );
            } );

            it( 'returns the rounded number for non-integers', function () {
                var number = 42.3;
                expect( number.hashCode() ).toBe( 42 );
            } );
        } );

        describe( 'for Strings', function () {
            it( 'uses the correct function', function () {
                expect( ('Hello World!').hashCode ).toBe( String.prototype.hashCode );
            } );

            it( 'returns the expected value', function () {
                var string = 'Hello World!';
                // TODO check actual Java value
                expect( string.hashCode() ).toBe( -969099747 );
            } );
        } );

        describe( 'for Booleans', function () {
            it( 'uses the correct function', function () {
                expect( (true).hashCode ).toBe( Boolean.prototype.hashCode );
            } );

            it( 'returns the expected value', function () {
                expect( Boolean( true ).hashCode() ).toBe( 1231 );
                expect( Boolean( false ).hashCode() ).toBe( 1237 );
            } );
        } );

        describe( 'for Arrays', function () {
            it( 'uses the correct function', function () {
                expect( ([]).hashCode ).toBe( Array.prototype.hashCode );
            } );

            it( 'returns the same hash code for the same object', function () {
                var arr = [0, 1, 2];
                expect( arr.hashCode() ).toBe( arr.hashCode() );
            } );

            it( 'returns a different hash code for another instance', function () {
                var arr = [0, 1, 2],
                    sameArr = [0, 1, 2];
                expect( arr.hashCode() ).not.toBe( sameArr.hashCode() );
            } );

            it( 'returns a different hash code for a different array', function () {
                var arr = [0, 1, 2],
                    otherArr = [0];
                expect( arr.hashCode() ).not.toBe( otherArr.hashCode() );
            } );
        } );

        describe( 'for Objects', function () {
            it( 'uses the correct function', function () {
                expect( ({}).hashCode ).toBe( Object.prototype.hashCode );
            } );

            it( 'returns 0 for an empty object', function () {
                var obj = {};
                expect( obj.hashCode() ).toBe( 0 );
            } );

            it( 'returns the expected value for a non-empty object', function () {
                var obj = {a: 0};
                expect( obj.hashCode() ).toBe( 95063 );
            } );
        } );
    } );

    describe( 'equals()', function () {
        describe( 'for Numbers', function () {
            it( 'uses the correct function', function () {
                expect( (42).equals ).toBe( Number.prototype.equals );
            } );

            it( 'returns true for the same numbers', function () {
                expect( (42).equals( 42 ) ).toBe( true );
                expect( Number( 42 ).equals( 42 ) );
            } );

            it( 'returns false for different numbers', function () {
                expect( (42).equals( 0 ) ).toBe( false );
                expect( (42).equals( 41.9 ) ).toBe( false );
            } );

            it( 'returns false for wrong types', function () {
                expect( (42).equals( Object( 42 ) ) ).toBe( false );
                expect( (42).equals( '42' ) ).toBe( false );
            } );
        } );

        describe( 'for Strings', function () {
            it( 'uses the correct function', function () {
                expect( ('Hello World!').equals ).toBe( String.prototype.equals );
            } );

            it( 'returns true for the same string', function () {
                expect( ('Hello World!').equals( 'Hello World!' ) ).toBe( true );
            } );

            it( 'returns false for different strings', function () {
                expect( ('Hello').equals( 'World!' ) ).toBe( false );
            } );
        } );

        describe( 'for Booleans', function () {
            it( 'uses the correct function', function () {
                expect( (true).equals ).toBe( Boolean.prototype.equals );
            } );

            it( 'returns true if and only if other is true', function () {
                expect( (true).equals( true ) ).toBe( true );
                expect( (false).equals( false ) ).toBe( true );

                expect( (true).equals( false ) ).toBe( false );
                expect( (false).equals( true ) ).toBe( false );
            } );
        } );

        describe( 'for Arrays', function () {
            it( 'uses the correct function', function () {
                expect( ([]).equals ).toBe( Array.prototype.equals );
            } );

            it( 'returns true for the same instance', function () {
                var arr = [0, 1, 2];
                expect( arr.equals( arr ) ).toBe( true );
            } );

            it( 'returns false for identical arrays', function () {
                var arr = [0, 1, 2],
                    sameArr = [0, 1, 2];
                expect( arr.equals( sameArr ) ).toBe( false );
                expect( sameArr.equals( arr ) ).toBe( false );
            } );

            it( 'returns false for different objects', function () {
                var arr = [0, 1, 2],
                    otherArr = [0];
                expect( arr.equals( otherArr ) ).toBe( false );
                expect( otherArr.equals( arr ) ).toBe( false );
            } );
        } );

        describe( 'for Objects', function () {
            var obj = {a: 42, b: 5, c: { d: -7 }};

            it( 'uses the correct function', function () {
                expect( ({}).equals ).toBe( Object.prototype.equals );
            } );

            it( 'returns true for the same object', function () {
                expect( obj.equals( obj ) ).toBe( true );
                expect( obj.equals( {a: 42, b: 5, c: { d: -7 }} ) ).toBe( true );
            } );

            it( 'returns false for different objects', function () {
                expect( obj.equals( {a: 42, b: 5, c: { d: -8 }} ) ).toBe( false );
            } );
        } );
    } );
} );