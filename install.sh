#!/usr/bin/env bash

echo "Cloning and configuring web repository in parent folder..."
git clone https://github.com/drassil-net/drassil-app.git "../web"

CURRENT=`pwd`

cd "../web"

npm install

cd $CURRENT

echo "Installing npm modules"
npm install

read -p "done. press any key"
