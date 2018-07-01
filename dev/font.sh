#!/usr/bin/env bash

FONT=$1
FILL=$2
SIZE=$3
SUFFIX=$4

convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:: colon$SUFFIX.png

convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:0 0$SUFFIX.png
convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:1 1$SUFFIX.png
convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:2 2$SUFFIX.png
convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:3 3$SUFFIX.png
convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:4 4$SUFFIX.png
convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:5 5$SUFFIX.png
convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:6 6$SUFFIX.png
convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:7 7$SUFFIX.png
convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:8 8$SUFFIX.png
convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:9 9$SUFFIX.png

convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:Mon Mon$SUFFIX.png
convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:Tue Tue$SUFFIX.png
convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:Wed Wed$SUFFIX.png
convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:Thu Thu$SUFFIX.png
convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:Fri Fri$SUFFIX.png
convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:Sat Sat$SUFFIX.png
convert -font $FONT -fill $FILL -pointsize $SIZE -transparent white label:Sun Sun$SUFFIX.png
