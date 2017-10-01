#!/usr/bin/env bash

if [ ! -d staging ]; then
  mkdir staging
fi

rm -rf staging/*

ng build --target=production --environment=prod

cp dist/* staging/
