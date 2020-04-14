STATUSES_URL=$(curl --request GET --url https://api.github.com/repos/chrishutchinson/engineers-guide/deployments --header 'content-type: application/json' | jq -r '.[0].statuses_url')
DEPLOYMENT_URL=$(curl --request GET --url "${STATUSES_URL}" | jq -r '.[0].target_url')
echo "::set-output name=DEPLOYMENT_URL::$(DEPLOYMENT_URL)"