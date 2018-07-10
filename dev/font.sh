#!/usr/bin/env bash

FONT=$1
FILL=$2
SIZE=$3
SUFFIX=$4

METAFILE="font-data.json"

CHARACTERS=(0 1 2 3 4 5 6 7 8 9 : - pm am Mon Tue Wed Thu Fri Sat Sun)

echo '{"characters": {' > $METAFILE

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

	FILENAME=$FILENAME$SUFFIX.png

	convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:$CHAR $FILENAME

	echo -n '"'$CHAR'": {"width": ' >> $METAFILE
	convert $FILENAME -ping -format "%w" info: | xargs echo -n >> $METAFILE
	echo -n ', "height": ' >> $METAFILE
	convert $FILENAME -ping -format "%h" info: | xargs echo -n >> $METAFILE
	echo "}," >> $METAFILE
done

sed '$ s/.$//' $METAFILE | tee $METAFILE

echo "}}" >> $METAFILE
