describe( 'JsavaUtils', function () {
    var JsavaUtils = jsava.JsavaUtils;

    describe( 'createAnonymousClass()', function () {
        it( 'returns a class that can be instanciated', function () {
            var Clazz = JsavaUtils.createAnonymousClass( {
                extend: jsava.lang.Object,

                construct: function () {
                    this.testProperty = 0;
                },

                members: {
                    testProperty: -1,

                    setTestProperty: function (newValue) {
                        this.testProperty = newValue;
                    },

                    getTestProperty: function () {
                        return this.testProperty;
                    }
                }
            } );

            var instance = new Clazz();
            expect( instance.getTestProperty() ).toBe( 0 );

            instance.setTestProperty( 42 );
            expect( instance.getTestProperty() ).toBe( 42 );
        } );
    } );

    describe( 'arrayOfGivenSize()', function () {
        it( 'creates null array of given size', function () {
            expect( JsavaUtils.arrayOfGivenSize( 3, null ) ).toEqual( [null, null, null] );
        } );

        it( 'creates array of given size with given default value', function () {
            expect( JsavaUtils.arrayOfGivenSize( 3, 42 ) ).toEqual( [42, 42, 42] );
        } );
    } );
} );