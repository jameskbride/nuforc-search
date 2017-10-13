#!/bin/bash

docker run -d -v "$PWD/esdata":/usr/share/elasticsearch/data -v "$PWD/config":/usr/share/elasticsearch/config -p 9200:9200 -p 9300:9300 elasticsearch