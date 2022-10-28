#!/bin/bash

# This script can be used to run elasticsearch outside of docker-compose.
docker run -d -v "$PWD/esdata":/usr/share/elasticsearch/data -p 9200:9200 -p 9300:9300 nuforc-elasticsearch


