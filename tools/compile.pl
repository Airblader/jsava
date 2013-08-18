#!/usr/bin/perl

use 5.010;
use strict;
use warnings;


my $sourceFolder = "../src";

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


### MAIN

chdir( $sourceFolder ) or die $!;
my @files = split /\n/, `find . -type f -name *.js -print`;

# holds a linear list of file names in the order they need to be compiled
my @compileOrder;

foreach( @files ) {
    my $clazzName = getClassNameFromPath( $_ );
    my @requiredClasses = getRequiredClasses( $_ );

    # TODO
}

# TODO compile
    # 1. qooxdoo file (optional?)
    # 2. js native types stubs
    # 3. classes