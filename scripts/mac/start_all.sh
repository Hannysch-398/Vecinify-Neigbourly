#!/bin/bash

echo "--- Starte Docker-Container ---"
docker-compose up -d

echo "--- Starte Backend (Gradle) in neuem Tab ---"
osascript -e 'tell application "Terminal" to do script "cd \"'$(pwd)'/backend\" && ./gradlew bootRun"'

echo "--- Starte Frontend (Angular) in neuem Tab ---"
osascript -e 'tell application "Terminal" to do script "cd \"'$(pwd)'/frontend/frontend\" && npm install && npm start"'

echo "--------------------------------------------------"
echo "Alle Prozesse wurden in separaten Tabs gestartet!"
echo "--------------------------------------------------"