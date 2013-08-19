#!/usr/bin/perl

use 5.010;
use strict;
use warnings;

my $outputFilename = '../jsava.compiled.js';

my $sourceFolder = "../src";
my $libFolder = "../lib";

my $primitiveStubs = "jsavaPrimitivesStubs.js";
my $qooxdoo = "qx-oo-3.0.min.js";

###

# Returns the qualified class name for a file based on its path, e.g.
# 'jsava/io/Serializable.js' -> 'jsava.io.Serializable'
sub getClassNameFromPath {
    my $path = $_[0];
    my $className = $path;

    # remove '../' kind of parts from the beginning
    $className =~ s/^(\.{1,2}\/)*//;

    # remove trailing '.js'
    $className =~ s/\.js$//;

    # replace '/' with '.'
    $className =~ s/\//./g;

    return $className;
}

sub getFilenameFromClassName {
    my $className = $_[0];
    my $path = $className;

    $path =~ s/\./\//g;
    return "$path.js";
}

# Returns an unique list of all file names used as super classes
# @param {string} file content
sub getSuperClasses {
    my $content = $_[0];
    my @superClasses;

    my @clazzes = $content =~ m/(?:extend\s*:\s*)([^,\n]+),?/g;
    foreach( @clazzes ) {
        my $clazz = $_;
        $clazz =~ s/\s*//g;

        next if $clazz eq "";
        next if $clazz eq "qx.core.Object";
        next if $clazz ~~ @superClasses;

        push @superClasses, $clazz;
    }

    return @superClasses;
}

# Returns an unique list of all file names used as interfaces
# @param {string} file content
sub getInterfaces {
    my $content = $_[0];
    my @interfaces;

    # look for 'implement: namespace.clazz,' pattern
    my @interfacesSingle = $content =~ m/(?:implement\s*:\s*)([^\[\],\n]+)(?:,?)/g;
    foreach( @interfacesSingle ) {
        my $clazz = $_;
        $clazz =~ s/\s*//g;

        next if $clazz eq "";
        next if $clazz eq "qx.core.Object";
        next if $clazz ~~ @interfaces;

        push @interfaces, $clazz;
    }

    # look for 'implement: [namespace.clazz1, namespace.clazz2],' pattern
    my @interfacesMultiple = $content =~ m/(?:implement\s*:\s*\[)(?:([^\n]+),?)+(?:\],?)/g;
    foreach( @interfacesMultiple ) {
        my @clazzes = split /,/, $_;
        foreach( @clazzes ) {
            my $clazz = $_;
            $clazz =~ s/\s*//g;

            next if $clazz eq "";
            next if $clazz eq "qx.core.Object";
            next if $clazz ~~ @interfaces;

            push @interfaces, $clazz;
        }
    }

    return @interfaces;
}

# @param {string} fully qualified filename
sub getRequiredClasses {
    my $filename = $_[0];
    open FILE, "<", "$filename" or die $!;

    my $content = do {
        local $/;
        <FILE>;
    };

    close FILE;

    my @requiredClasses = ( getInterfaces( $content ), getSuperClasses( $content ) );
    return @requiredClasses;
}

# TODO detect circular references
sub addSourceToCompileOrder {
    my @compileOrder = @{ $_[0] };
    my $className = $_[1];
    my @requiredClasses = getRequiredClasses( getFilenameFromClassName( $className ) );

    if( $className ~~ @compileOrder ) {
        # TODO entry already in compile order, so maybe move it
        return @compileOrder;
    }

    foreach( @requiredClasses ) {
        # TODO can this be avoided (currently necessary for inner classes)?
        next if !-e getFilenameFromClassName( $_ );

        @compileOrder = addSourceToCompileOrder( \@compileOrder, $_ );
    }

    push @compileOrder, $className;

    return @compileOrder;
}


### MAIN

chdir( $sourceFolder ) or die $!;
my @files = split /\n/, `find . -type f -name *.js -print`;

# holds a linear list of file names in the order they need to be compiled
my @compileOrder;

foreach( @files ) {
    my $clazzName = getClassNameFromPath( $_ );
    @compileOrder = addSourceToCompileOrder( \@compileOrder, $clazzName );
}

# TODO just for testing
foreach( @compileOrder ) {
#    print "$_\n";
}

system( "rm -f $outputFilename" );
system( "cat $libFolder/$qooxdoo >> $outputFilename" );
system( "cat $libFolder/$primitiveStubs >> $outputFilename" );
foreach( @compileOrder ) {
    my $filename = getFilenameFromClassName( $_ );
    system( "cat $filename >> $outputFilename" );
}

# TODO run a script to shorten names