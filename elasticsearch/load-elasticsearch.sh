#!/bin/bash

for file in $1/*.json
do
    curl -X POST -H "Content-Type: application/json"  -T "$file" $2/encounters/encounter;
done;
