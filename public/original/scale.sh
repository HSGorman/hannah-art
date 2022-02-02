#!/bin/bash

for f in ./*.jpeg; do
echo ${f};
echo "=>"
echo "../${f}"
sf="${f:2}"
echo "${sf}"
rm "../${sf}"
rm "../small-${sf}"
convert ${f} -resize 698x872 "../${sf}" 
convert ${f} -resize 349x437 "../small-${sf}" 

done;