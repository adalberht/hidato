#!/bin/sh

cd "$(dirname "$0")"
rm -rf build
CUR_DIR=`pwd`
cd ./front-end
yarn build
cd $CUR_DIR
cp -r ./front-end/build .
