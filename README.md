# NUFORC Search
This project was created as part of a talk I gave about using Elasticsearch back in 2016. It exercises some basic functionality, such as performing basic and complex searches, and inserting new data into an elasticsearch index. 

# Notes
This project was built using (now much older versions of) AngularJS and Elasticsearch. Were I to rebuild this project today I would use React, and move most of the search functionality to an actual backend.

Testing was not a real consideration as it was for demo purposes only.

# Setup
1. Install and use the node version in `web/nuforc-web/.nvmrc`.
2. Install yarn via `npm install -g yarn`.
3. Install the dependencies for `web/nuforc-web` via `yarn install`.
4. Run the `web/nuforc-web/rebuild.sh` script. This will build the distribution files for nginx.
5. Build and start docker-compose at the root of the project: `docker-build && docker-compose up`.
6. Run `elasticsearch/init-elasticsearch.sh http://localhost:9200` to initialize the encounters index.
7. Download the encounter data using the [nuforc-scraper-ruby](https://github.com/jameskbride/nuforc-scraper-ruby) project.
8. Run `elasticsearch/load-elasticsearch.sh <encounter data directory> http://localhost:9200`.
9. Visit http://localhost and start searching for UFO data!