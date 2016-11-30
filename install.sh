#!/usr/bin/env bash

echo "Cloning web repository in parent folder..."
git clone https://github.com/Drassil/drassil-app.git "../web"

echo "Installing npm modules"
npm install

read -p "done. press any key"