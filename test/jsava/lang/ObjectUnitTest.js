describe( 'Object', function () {
    var _Object = jsava.lang.Object;

    describe( 'hashCode()', function () {
        it( 'produces a hash code', function () {
            var obj = new _Object(),
                bareHashCode = obj.hashCode();
            obj.number = 42;

            expect( obj.hashCode() ).toBe( 31 * bareHashCode + obj.number.hashCode() );
        } );
    } );

    describe( 'toString()', function () {
        it( 'returns the correct resuöt', function () {
            var obj = new _Object();
            obj.hashCode = function () {
                return -42;
            };

            expect( obj.toString() ).toBe( 'jsava.lang.Object@-2a' );
        } );
    } );
} );