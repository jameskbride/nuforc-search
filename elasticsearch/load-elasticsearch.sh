#!/bin/bash

# $1 - The directory containing the encounter json files.
# $2 - The server location (http://localhost:9200 for development).
for file in $1/*.json
do
    curl -X POST -H "Content-Type: application/json"  -T "$file" $2/encounters/encounter;
done;
