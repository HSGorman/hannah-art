#!/bin/bash

# az login
# location="ukwest"
# defaultResourceGroup="DefaultResourceGroup-NEU"
# resourceGroup="ArtResource"
# appName="ArtSite" 
# servicePlan="ArtService"

# echo "Building"
# rm -rf dist
# npm run build
# cd dist
# zip -r published.zip ./* 
# mv published.zip ../
# cd ..

echo "Resource group"
az group create --location $location --resource-group $defaultResouceGroup --name $resourceGroup

echo "Service plan"
az appservice plan create --name $servicePlan --resource-group $resourceGroup --sku FREE --is-linux

echo "Service"
az webapp create --name $appName --resource-group $resourceGroup --plan $servicePlan --runtime NODE:16-lts

echo "Setting"
az webapp config appsettings set --resource-group $resourceGroup --name $appName --settings WEBSITE_RUN_FROM_PACKAGE="1" 

echo "Deploy..."
az webapp deployment source config-zip --resource-group $resourceGroup --name $appName --src published.zip 