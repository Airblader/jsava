jsava (Porting Java to Javascript)
==================================

jsava is an attempt to port Java base classes into Javascript.

Background
----------

The OOP framework to model classes is [qooxdoo](http://qooxdoo.org/)'s OOP layer as it provides most of the required
features, such as inheritance and interfaces. However, jsava currently uses its own dependency injection / compile
script rather than the tools provided with the qooxdoo toolchain.
For testing, the Javascript framework [Jasmine](http://pivotal.github.io/jasmine/) is used.


Goal
----

jsava is a pure free-time, experimental toy project.


Standards
---------

For consistent development, a set of rules shall be established on how to port Java code. This list is heavily
under construction:

* Public and protected fields / methods shall be implemented as close to the Java code as possible.
* This includes the naming (don't follow the qooxdoo scheme, but the original naming – whenever possible; the only
exception are jsava specific fields that do not exist in the original code)
* Private fields / methods are optional and don't necessarily have to be implemented.
* Methods that (currently or permanently) cannot be implemented shall throw an UnsupportedOperationException.
* Fields shall never be initialized as undefined; the default value (if it is undeclared in Java) shall either be null
for complex types or the appropriate corresponding default in Java (e.g. int -> 0, String -> null).
* Unlike Java, jsava shall treat Javascript's primitive types as complex types (e.g. a Javascript "number" type variable
shall be usable as an Integer); for this purpose, method stubs may be added to those types.
* Differences in behavior or implementation compared to the Java code shall have comments if necessary.
* TODO comments shall always have additional text describing what exactly there is to do.
* Exceptions shall be caught as closely to the Java version. As Javascript does not support catching exceptions that
way, the following pattern shall be used:

```
try {
    // ...
} catch( e ) {
    if( qx.Class.isSubClassOf( e.constructor, jsava.lang.IllegalStateException ) ) {
        // caught an IllegalStateException
    }

    // rethrow non-caught exceptions
    throw e;
}
```