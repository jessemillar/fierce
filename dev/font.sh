#!/usr/bin/env bash

FONT=$1
FILL=$2
SIZE=$3
SUFFIX=$4

METAFILE="font-data.json"

CHARACTERS=(0 1 2 3 4 5 6 7 8 9 : - pm am Mon Tue Wed Thu Fri Sat Sun)

echo '{' > $METAFILE

for i in ${CHARACTERS[@]}; do
	CHAR=$i
	PREFIX=$i

	if [[ $PREFIX == ":" ]]
	then
		PREFIX="colon"
	elif [[ $PREFIX == "-" ]]
	then
		PREFIX="dash"
	elif [[ $PREFIX == "0" ]]
	then
		PREFIX="zero"
	elif [[ $PREFIX == "1" ]]
	then
		PREFIX="one"
	elif [[ $PREFIX == "2" ]]
	then
		PREFIX="two"
	elif [[ $PREFIX == "3" ]]
	then
		PREFIX="three"
	elif [[ $PREFIX == "4" ]]
	then
		PREFIX="four"
	elif [[ $PREFIX == "5" ]]
	then
		PREFIX="five"
	elif [[ $PREFIX == "6" ]]
	then
		PREFIX="six"
	elif [[ $PREFIX == "7" ]]
	then
		PREFIX="seven"
	elif [[ $PREFIX == "8" ]]
	then
		PREFIX="eight"
	elif [[ $PREFIX == "9" ]]
	then
		PREFIX="nine"
	fi

	FILENAME=$PREFIX$SUFFIX.png

	convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:$CHAR $FILENAME

	echo -n '"'$PREFIX'": {"width": ' >> $METAFILE
	convert $FILENAME -ping -format "%w" info: | xargs echo -n >> $METAFILE
	echo -n ', "height": ' >> $METAFILE
	convert $FILENAME -ping -format "%h" info: | xargs echo -n >> $METAFILE
	echo "}," >> $METAFILE
done

sed '$ s/.$//' $METAFILE | tee $METAFILE

echo '}' >> $METAFILE
