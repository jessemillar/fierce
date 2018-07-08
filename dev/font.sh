#!/usr/bin/env bash

FONT=$1
FILL=$2
SIZE=$3
SUFFIX=$4

CHARACTERS=(0 1 2 3 4 5 6 7 8 9 : - Mon Tue Wed Thu Fri Sat Sun)

for i in ${CHARACTERS[@]}; do
	CHAR=$i
	FILENAME=$i

	if [[ $FILENAME == ":" ]]
	then
		FILENAME="colon"
	elif [[ $FILENAME == "-" ]]
	then
		FILENAME="dash"
	fi

	convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:$CHAR $FILENAME$SUFFIX.png
done
