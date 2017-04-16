#!/bin/bash

curl -X PUT -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 364165c1-aaf5-e8da-8dde-1f119fde150b" -d '{
	"mappings": {
		"encounter": {
			"properties": {
				"url": {
					"type": "string"
				},
				"date_time": {
					"type": "string"
				},
				"state": {
					"type": "string"
				},
				"shape": {
					"type": "string"
				},
				"duration": {
					"type": "string"
				},
				"summary": {
					"type": "string"
				},
				"posted_date": {
					"type": "string"
				},
				"description": {
					"type": "string"
				}
			}
		}
	}
}' "http://localhost:8080/encounters"
