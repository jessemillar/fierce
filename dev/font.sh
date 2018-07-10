#!/usr/bin/env bash

FONT=$1
FILL=$2
SIZE=$3
PREFIX=$4

METAFILE="font-data.json"

CHARACTERS=(0 1 2 3 4 5 6 7 8 9 : - pm am Mon Tue Wed Thu Fri Sat Sun)

echo '{' > $METAFILE

for i in ${CHARACTERS[@]}; do
	CHAR=$i
	SUFFIX=$i

	if [[ $SUFFIX == ":" ]]
	then
		SUFFIX="colon"
	elif [[ $SUFFIX == "-" ]]
	then
		SUFFIX="dash"
	elif [[ $SUFFIX == "0" ]]
	then
		SUFFIX="zero"
	elif [[ $SUFFIX == "1" ]]
	then
		SUFFIX="one"
	elif [[ $SUFFIX == "2" ]]
	then
		SUFFIX="two"
	elif [[ $SUFFIX == "3" ]]
	then
		SUFFIX="three"
	elif [[ $SUFFIX == "4" ]]
	then
		SUFFIX="four"
	elif [[ $SUFFIX == "5" ]]
	then
		SUFFIX="five"
	elif [[ $SUFFIX == "6" ]]
	then
		SUFFIX="six"
	elif [[ $SUFFIX == "7" ]]
	then
		SUFFIX="seven"
	elif [[ $SUFFIX == "8" ]]
	then
		SUFFIX="eight"
	elif [[ $SUFFIX == "9" ]]
	then
		SUFFIX="nine"
	fi

	FILENAME=$PREFIX$SUFFIX.png

	convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:$CHAR $FILENAME

	echo -n '"'$SUFFIX'": {"width": ' >> $METAFILE
	convert $FILENAME -ping -format "%w" info: | xargs echo -n >> $METAFILE
	echo -n ', "height": ' >> $METAFILE
	convert $FILENAME -ping -format "%h" info: | xargs echo -n >> $METAFILE
	echo -n ', "href": "'$FILENAME'"},' >> $METAFILE
done

sed '$ s/.$//' $METAFILE | tee $METAFILE

echo '}' >> $METAFILE
