#!/usr/bin/perl

use 5.010;
use strict;
use warnings;
use FindBin;
use Getopt::Long;
use Pod::Usage;


# Parameters

my $logLevel = '';
my $help = '';

GetOptions(
  'log-level=s' => \$logLevel,
  'h|help|?' => \$help
);

pod2usage( { -verbose => 1 } ) if $help;


my $scriptDir = $FindBin::Bin;
chdir( "$scriptDir/../" );

my @files = split /\n/, `cd src/ && find * -type f -name "*.js" -print`;

# holds a linear list of file names in the order they need to be compiled
my @compileOrder;

foreach( @files ) {
    my $clazzName = getClassNameFromPath( $_ );
    @compileOrder = addSourceToCompileOrder( \@compileOrder, $clazzName, "" );
}


# Generate main file (uncompressed)

my $jsavaContent = readFromFile( "jsava/templates/jsava.js.template" );

my $jsavaLogContent = readFromFile( "jsava/jsavaLog.js" );
my $jsavaInitContent = readFromFile( "jsava/jsavaInit.js" );
my $jsavaExtendBuiltInsContent = readFromFile( "jsava/jsavaExtendBuiltIns.js" );

$jsavaContent =~ s/\Q__JSAVALOG__\E/$jsavaLogContent/;
$jsavaContent =~ s/\Q__JSAVAINIT__\E/$jsavaInitContent/;
$jsavaContent =~ s/\Q__JSAVAEXTENDBUILTINS__\E/$jsavaExtendBuiltInsContent/;

my $jsavaClassesContent = "";
foreach( @compileOrder ) {
    my $filename = getFilenameFromClassName( $_ );
    my $classContent = readFromFile( "src/$filename" );

    my $validationResult = validateClass( $classContent );
    if( $validationResult ne "" ) {
        print "[E] Found errors during compilation of class $_\n";
        print " - $validationResult\n";
        exit -1;
    }

    $jsavaClassesContent .= $classContent;
    $jsavaClassesContent .= "\n\n";
}
$jsavaContent =~ s/\Q__JSAVACLASSES__\E/$jsavaClassesContent/;

if( !isBlank( $logLevel ) ) {
    $logLevel = uc $logLevel;
    $jsavaContent =~ s/\Q__JSAVALOGLEVEL__\E/$logLevel/;
}

writeToFile( "jsava.js", $jsavaContent );


# Generate main file (compressed)

system( "lib/UglifyJS/bin/uglifyjs --lift-vars -o jsava.min.js jsava.js" );


# Generate tests.jstd

my $testsContent = readFromFile( "jsava/templates/tests.jstd.template" );

my $testsSourceFilesList = "";
foreach( @compileOrder ) {
    my $filename = getFilenameFromClassName( $_ );
    $testsSourceFilesList .= "  - src/$filename\n";
}

my @testFiles = split/\n/, `cd test/ && find * -type f -name "*UnitTest.js" -print`;
my $testsTestFilesList = "";
foreach( @testFiles ) {
    $testsTestFilesList .= "  - test/$_\n";
}

$testsContent =~ s/\Q__SOURCEFILES__\E/$testsSourceFilesList/;
$testsContent =~ s/\Q__TESTFILES__\E/$testsTestFilesList/;

writeToFile( "tests.jstd", $testsContent );


# Generate SpecRunner.html

my $specRunnerContent = readFromFile( "jsava/templates/SpecRunner.html.template" );

my $specsList = "";
foreach( @testFiles ) {
    $specsList .= "    <script type=\"text/javascript\" src=\"test/$_\"></script>\n";
}

$specRunnerContent =~ s/\Q__SPECS__\E/$specsList/;
$specRunnerContent =~ s/\Q__JSAVASRC__\E/jsava.js/;

writeToFile( "SpecRunner.html", $specRunnerContent );

### SUBROUTINES

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
    my $content = readFromFile( "src/$filename" );

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
        next if !-e ( "src/" . getFilenameFromClassName( $_ ) );

        $startClassName = $className if $startClassName eq "";
        @compileOrder = addSourceToCompileOrder( \@compileOrder, $_, $startClassName );
    }

    push @compileOrder, $className;
    return @compileOrder;
}

sub validateClass {
    my $content = $_[0];
    my @lines = split /\n/, $content;
    my $lineCounter = 1;

    # either defineClass or defineInterface must be used
    if( !( $content =~ m/define(Class|Interface)/ ) ) {
        return "No class or interface definition found";
    }

    # any class definition that defines a constructor must call a super constructor
    if( $content =~ m/defineClass/ && $content =~ m/construct/ && !( $content =~ m/(this\.base|this\.super)/ ) ) {
        return "No super constructor call found";
    }

    foreach( @lines ) {
        # only strict comparison should be used
        if( $_ =~ m/\s==\s/ || $_ =~ m/\s!=\s/ ) {
            return "Illegal non-strict comparison in line $lineCounter";
        }

        $lineCounter += 1;
    }

    return "";
}

sub writeToFile {
    my $filename = $_[0];
    my $content = $_[1];

    open FILE, ">", $filename;
    print FILE $content;
    close FILE;
}

sub readFromFile {
    my $filename = $_[0];
    return do {
        local $/ = undef;
        open FILE, "<", $filename or die $!;
        <FILE>;
    };
}

sub isBlank {
    return 1 if $_[0] =~ /^\s*$/;
    return 0;
}

__END__

=head1 SYNOPSIS

TODO