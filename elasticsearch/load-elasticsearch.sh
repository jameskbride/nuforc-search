#!/bin/bash

for file in $1/*.json
do
    curl -X POST -H "Content-Type: application/json"  -T "$file" http://localhost:8080/encounters/encounter;
done;
