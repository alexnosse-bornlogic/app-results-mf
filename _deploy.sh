curl -L https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 -o ./jq
chmod a+x ./jq
VERSION=$(node --eval="process.stdout.write(require('./package.json').version)")

aws s3 cp s3://bornlogic-mf/config/import-map.json import-map.json || echo '{"imports": {}}' > import-map.json

NEW_URL=/config/mf/app-results/$VERSION/bornlogic-app-results-mf.js

cat ./import-map.json | ./jq --arg NEW_URL "$NEW_URL" '.imports["@bornlogic/app-results-mf"] = $NEW_URL' > new.importmap.json
aws s3 cp dist s3://bornlogic-mf/config/mf/app-results/$VERSION --recursive
aws s3 cp new.importmap.json s3://bornlogic-mf/config/import-map.json

aws cloudfront create-invalidation --distribution-id ENODVMI77H0X3 --paths '/*'