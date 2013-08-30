What is jsava?
==============

An attempt to port Java classes into Javascript while preserving the original Java language code's structure and
hierarchy, i.e. inheritance and interfaces.


Technology Stack
----------------

* OOP Layer: [qooxdoo Core](http://qooxdoo.org/)
  * Although it comes with a toolchain, jsava currently utilizes its own compiler script for dependency management
and minification.
* Testing: [Jasmine](http://pivotal.github.io/jasmine/)
* Code Style: configuration file is found in lib/style.xml


Installation
------------

1. Fork or clone the repository.
2. Make sure your system meets the following requirements:
  * Perl (>= 5.010)
  * Java (>= 1.6)
  * (Only needed for coverage analysis) [nodejs](http://nodejs.org/) and the [node-coverage](https://github.com/piuccio/node-coverage) module
3. Execute `tools/compile.pl` to build the project.
4. To run the tests you can either open the `SpecRunner.html` in a browser or use the `tests.jstd` file for jsTestDriver.
Both files will be generated in the previous step.


Usage
-----

jsava classes follow the same package naming schema as in Java, with one slight modification: The root package is called
`jsava` (d'oh). This means that classes can be accessed by their fully qualified name, i.e.

    var map = new jsava.util.HashMap();

However, this is pretty exhausting and verbose. To make life a bit easier, jsava currently tries to export all classes
to a shortened name – **if possible**. Whenever the short name already exists, it will be tried with a 'j' prefix. If
this is still not possible, it will be skipped. This allows something like

    var map = new HashMap();

However, because `Object` is already a Javascript built-in type, the jsava class is prefixed and will be available as
`jObject`.

A little example script would be

    var map = new HashMap();
    map.put( 42, 1337 );

    console.log( map.get( 42 ) ); // 1337


Standards and Patterns
----------------------

### General

* The main objective is to preserve the original Java implementation as closely as possible.
* To keep the code consistent, the following rules shall be followed.
  * However, this list is subject to change.
* If any situation not covered in these rules is encountered, existing code shall be looked at for examples and new
patterns be documented.

### Naming conventions

1. All names shall follow the original Java name pattern, not the qooxdoo pattern.
2. For conflicting names (e.g. property `size` and method `size()`), the entity that gets the original name is determined by
the following rules:
  * Higher visibility (`public` > `protected` > `public`)
  * Methods over fields
3. The inferior entity shall be named according to the qooxdoo scheme (e.g. private field `size` -> `__size`). If the
visibility retains the name conflict, the entity shall be handled as private.

### Classes and Interfaces

1. Every method in an interface that takes a parameter or returns something shall have annotations.
2. Every method in a class that has not been defined in a superclass or interface shall be annotated.
3. If a class has a constructor, it *must* call the parent constructor.
4. To check an argument for its type, use either `qx.Class.hasInterface()` (for interfaces) or `qx.Class.isSubClassOf`
(for classes). Do *not* use `implementsInterface`, `objectImplements`, …

### Members

1. Private members may be implemented differently or omitted altogether if not necessary.
2. Every member not initialized with its actual type (i.e. when initialized as `null`) shall have a `@type` annotation.
3. Every member not defined in a superclass shall have its visibility annotated.
4. Members that either currently or permanently cannot be implemented shall still be added and throw an
`UnsupportedOperationException`.
5. No member variable shall ever be initialized with `undefined`. Instead, the correct default value shall be taken, i.e.
a simple `Number` member will be `0` while any complex object will default to `null`.
6. If any implementation -- or its behavior -- differs from the original Java code, there shall be comments if necessary.
7. Inner classes, especially those requiring a reference to the enclosing class, shall be initialized with `null` as a
member (with corresponding annotations) and be defined in the enclosing class's constructor using
`jsava.JsavaUtils.createAnonymousClass` (see example in `jsava.util.HashMap`).

### Exceptions

1. See `jsava.lang.RuntimeException` for an example on how to define a simple exception only capsulating a sub class
with a new name.
2. Since Javascript can only catch anything that is thrown, the following pattern shall be used to catch exceptions
in a similar manner to Java:

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

### Testing

1. Every public method of a class shall have at least one test.
2. Every non-error use-case of a method shall be tested (error-cases are a nice plus, though).

### Comments

1. A `TODO` comment may never be empty; it should always contain what the comment is about.