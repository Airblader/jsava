#!/usr/bin/perl

use 5.010;
use strict;
use warnings;

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

# Returns the filename with path for a fully qualified class name
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

sub addSourceToCompileOrder {
    my @compileOrder = @{ $_[0] };
    my $className = $_[1];
    my $startClassName = $_[2];

    if( $className eq $startClassName && $startClassName ne "" ) {
        print "[E] Circular reference detected.\n";
        return @compileOrder;
    }

    if( $className ~~ @compileOrder ) {
        return @compileOrder;
    }

    my @requiredClasses = getRequiredClasses( getFilenameFromClassName( $className ) );
    foreach( @requiredClasses ) {
        # This is currently needed for inner classes which are not in separate files, but
        # are still detected.
        # TODO find a way to get rid of this
        next if !-e getFilenameFromClassName( $_ );

        $startClassName = $className if $startClassName eq "";
        @compileOrder = addSourceToCompileOrder( \@compileOrder, $_, $startClassName );
    }

    push @compileOrder, $className;
    return @compileOrder;
}


### MAIN

chdir( "../src" ) or die $!;
my @files = split /\n/, `find . -type f -name *.js -print`;

# holds a linear list of file names in the order they need to be compiled
my @compileOrder;

foreach( @files ) {
    my $clazzName = getClassNameFromPath( $_ );
    @compileOrder = addSourceToCompileOrder( \@compileOrder, $clazzName, "" );
}

system( "rm -f ../jsava.js" );
# TODO this cannot be compiled with closure compiler because it modifies Object.prototype -> fix
#system( "cat ../lib/jsavaPrimitivesStubs.js >> ../jsava.js" );
foreach( @compileOrder ) {
    my $filename = getFilenameFromClassName( $_ );
    system( "cat $filename >> ../jsava.js" );
    system( "echo \"\n\" >> ../jsava.js" );
}

my $jsavaShortenerContent = `cat ../lib/jsavaShortener.js`;
my $compileOrderArray = "'" . ( join "','", @compileOrder ) . "'";
$jsavaShortenerContent =~ s/\Qvar compileOrder = [];\E/var compileOrder = [$compileOrderArray];/;
system( "echo \"$jsavaShortenerContent\" >> ../jsava.js" );

system( "cd ../lib && java -jar yuicompressor-2.4.8.jar ../jsava.js -o ../jsava.min.js" );