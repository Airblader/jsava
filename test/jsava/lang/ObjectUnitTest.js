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
} );