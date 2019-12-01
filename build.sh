#!/bin/bash

npm run build
#npm run dev || npm run build

cp dist/bundle.js ~/projects/golfmanager/www/public/vendor/minipaint/
cp dist/bundle.js.map ~/projects/golfmanager/www/public/vendor/minipaint/