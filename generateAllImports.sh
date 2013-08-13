#!/bin/bash

FILENAME="imports.js"
SOURCES=`cd src && find * -name "*.js"`

rm -f "$FILENAME"

while read -r current; do
    current="${current//\//.}"
    current="${current/\.js/}"
    echo "jimport('$current');" >> "$FILENAME"
done <<< "$SOURCES"