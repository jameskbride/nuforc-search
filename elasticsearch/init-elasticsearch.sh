#!/bin/bash

# $1 should be the server location (http://localhost:9200 for development)
curl -X PUT -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 364165c1-aaf5-e8da-8dde-1f119fde150b" -d '{
	"mappings": {
		"encounter": {
			"properties": {
				"url": {
					"type": "string"
				},
				"date_time": {
					"type": "string",
					"fielddata": true
				},
				"state": {
					"type": "string",
					"fielddata": true
				},
				"shape": {
					"type": "string",
					"fielddata": true
				},
				"duration": {
					"type": "string",
					"fielddata": true
				},
				"summary": {
					"type": "string",
					"fielddata": true
				},
				"posted_date": {
					"type": "string",
					"fielddata": true
				},
				"description": {
					"type": "string",
					"fielddata": true
				}
			}
		}
	}
}' "$1/encounters"
