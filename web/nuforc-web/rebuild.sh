#!/usr/bin/env bash

if [ ! -d staging ]; then
  mkdir staging
fi

rm -rf staging/*

yarn run build --target=production --environment=prod

cp dist/* staging/
